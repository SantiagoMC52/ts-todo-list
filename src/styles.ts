import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const MainContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3A3A3A;
    width: 100vw;
    height: 100vh;
`;

export const Header = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #444444;
    flex: 30%;
    margin-top: 2em;
    width: 50%;
`;

export const InputsContainer = styled('div')`
    display: flex;
    align-items: center;
`;

export const TaskInput = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '20em'
}))`
    border: 2px solid #ffce4b;
    border-radius: 5px;
    margin: 1em;
    padding: 1em;
    width: ${(props) => props.size};

    :focus{
        outline: none;
    }
`;

export const DaysInput = styled.input.attrs((props) => ({
  type: 'number',
  size: props.size || '20em'
}))`
    border: 2px solid #ffce4b;
    border-radius: 5px;
    margin: 1em;
    padding: 1em;
    width: ${(props) => props.size};

    :focus{
        outline: none;
    }
`;

export const AddBtn = styled('button')`
    background-color: #ffbe1c;
    color: white;
    padding: 1em;
    border: none;
    border-radius: 6px;
    margin-left: 20px;
`;

export const TodoList = styled('div')`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #444444;
    margin: 5px 0 10px 0;
    padding: 10px;
    flex: 70%;
    width: 50%;
`;
