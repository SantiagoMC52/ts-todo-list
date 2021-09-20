import React, { ChangeEvent, FC, useState } from 'react';
import { ITask } from './Interfaces';
import TodoTask from './Components/TodoTask';
import {
  AddBtn,
  DaysInput,
  GlobalStyle, Header, InputsContainer, MainContainer, NoTask, TaskInput, TodoList
} from './styles';

const App:FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadLine, setDeadline] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadLine,
      completed: done
    };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
    setDone(false);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((taskDel) => taskDel.taskName !== taskNameToDelete));
  };

  const doneTask = (taskNameDone: string): void => {
    setTodoList(todoList.map((item) => (
      item.taskName === taskNameDone ? { ...item, completed: !item.completed } : item
    )));
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Header>
        <InputsContainer>
          <TaskInput
            placeholder="Task..."
            name="task"
            value={task}
            size="270px"
            onChange={handleChange}
          />
          <DaysInput
            placeholder="Deadline (in days...)"
            name="deadline"
            min="0"
            value={deadLine}
            onChange={handleChange}
          />
        </InputsContainer>
        <AddBtn type="button" onClick={addTask}>Add task</AddBtn>
      </Header>
      <TodoList>
        {
          todoList.length > 0
            ? (

              todoList.map((
                todoTask: ITask
              ) => (
                <TodoTask
                  key={todoTask.taskName}
                  createdTask={todoTask}
                  deleteTask={deleteTask}
                  doneTask={doneTask}
                />
              ))
            ) : <NoTask>There are no tasks</NoTask>
        }
      </TodoList>
    </MainContainer>
  );
};

export default App;
