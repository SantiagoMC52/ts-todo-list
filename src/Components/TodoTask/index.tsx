/* eslint-disable no-unused-vars */
import React from 'react';
import { ITask } from '../../Interfaces';
import {
  ButtonsContainer, TaskInput, DoneBtn, DeleteBtn, TaskContainer
} from './styles';

interface Props {
    createdTask: ITask;
    deleteTask(taskNameToDelete: string): void;
    doneTask(taskNameDone: string): void;
}

const TodoTask = ({ createdTask, deleteTask, doneTask }:Props) => (
  <TaskInput className={!createdTask.completed ? 'task-item' : 'task-done'}>
    <TaskContainer>
      {createdTask.taskName}
      {' '}
      in
      {' '}
      {createdTask.deadline}
      {' '}
      days
    </TaskContainer>
    <ButtonsContainer>
      <DeleteBtn
        type="button"
        onClick={() => {
          deleteTask(createdTask.taskName);
        }}
      >
        Delete
      </DeleteBtn>
      <DoneBtn
        type="button"
        onClick={() => {
          doneTask(createdTask.taskName);
        }}
      >
        Done
      </DoneBtn>
    </ButtonsContainer>
  </TaskInput>
);

export default TodoTask;
