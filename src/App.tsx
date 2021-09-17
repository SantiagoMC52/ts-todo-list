import React, { ChangeEvent, FC, useState } from 'react';
import { ITask } from './Interfaces';
import TodoTask from './Components/TodoTask';

const App:FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadLine, setDeadline] = useState<number>(0);
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
      deadline: deadLine
    };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((taskDel) => taskDel.taskName !== taskNameToDelete));
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange} />
        <input type="number" placeholder="Deadlibe (in days...)" name="deadline" value={deadLine} onChange={handleChange} />
        <button type="button" onClick={addTask}>Add task</button>
      </div>
      <div>
        {
          todoList.map((
            todoTask: ITask
          ) => <TodoTask key={todoTask.taskName} createdTask={todoTask} deleteTask={deleteTask} />)
        }
      </div>
    </div>
  );
};

export default App;
