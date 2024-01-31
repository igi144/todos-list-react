import styled, { css } from "styled-components";

export const TaskList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
`

export const Content = styled.span`
${({ $taskDone }) => $taskDone && css`
text-decoration: line-through;
`}
`

export const Button = styled.button`

${({ $toggleButton }) => $toggleButton && css`
    background-color: rgb(12, 104, 0);
    border-style: none;
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 1s;
    text-align: center;

    &:hover {
        background-color: hsl(121, 100%, 50%);
        border-style: none;
        width: 32px;
        height: 32px;
    }

    &:active {
        background-color: hsl(121, 100%, 50%);
        border-style: none;
        width: 25px;
        height: 25px;
    }` }

${({ $removeButton }) => $removeButton && css`
    color: white;
    background-color: red;
    border-style: none;
    border: none;
    width: 30px;
    height: 30px;
    transition: 1s;
    text-align: center;

    &:hover {
        background-color: hsl(0, 100%, 70%);
        width: 32px;
        height: 32px;
    }
`}`;


export const TasksItems = styled.li`
    display: grid;
    word-wrap: break-word;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgb(238, 238, 238);

    ${({ hidden }) => hidden && css`
    display: none;
    `}`;

