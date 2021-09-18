/* eslint-disable no-unused-vars */
import React from 'react';
import { ITask } from '../../Interfaces';
import '../../styles.css';

interface Props {
    createdTask: ITask;
    deleteTask(taskNameToDelete: string): void;
    doneTask(taskNameDone: string): void;
}

const TodoTask = ({ createdTask, deleteTask, doneTask }:Props) => (
  <>
    <ul>
      <li className={!createdTask.completed ? 'task-item' : 'task-done'}>
        {createdTask.taskName}
        {' '}
        {createdTask.deadline}
        {' '}
        days
        <button
          type="button"
          onClick={() => {
            deleteTask(createdTask.taskName);
          }}
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => {
            doneTask(createdTask.taskName);
          }}
        >
          Done
        </button>
      </li>
    </ul>
  </>
);

export default TodoTask;
