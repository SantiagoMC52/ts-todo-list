/* eslint-disable no-unused-vars */
import React from 'react';
import { ITask } from '../../Interfaces';

interface Props {
    createdTask: ITask;
    deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ createdTask, deleteTask }:Props) => (
  <ul>
    <li>
      {createdTask.taskName}
      {' '}

      {createdTask.deadline}
      {' '}
      days
    </li>
    <button
      type="button"
      onClick={() => {
        deleteTask(createdTask.taskName);
      }}
    >
      Delete
    </button>
  </ul>
);

export default TodoTask;
