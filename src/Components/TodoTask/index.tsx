import React from 'react';
import { ITask } from '../../Interfaces';

interface Props {
    createdTask: ITask
}
const TodoTask = ({ createdTask }:Props) => (
  <ul>
    <li>
      {createdTask.taskName}
      {' '}

      {createdTask.deadline}
      {' '}
      days
    </li>
  </ul>
);

export default TodoTask;
