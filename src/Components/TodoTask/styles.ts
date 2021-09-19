import styled from 'styled-components';

export const TaskInput = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-top: 3px;
    background-color: #3A3A3A;
    color: white;
    width: 60%;
`;

export const TaskContainer = styled('div')`
    font-family: Arial, Helvetica, sans-serif;
`;

export const ButtonsContainer = styled('div')`
    display: flex;
    justify-content: space-evenly;
    width: 10em;
`;

export const DeleteBtn = styled('button')`
    background-color: #D04B40;
    color: white;
    padding: .5em;
    border: none;
    border-radius: 6px;
`;

export const DoneBtn = styled(DeleteBtn)`
    background-color: #8BC83C;
`;
