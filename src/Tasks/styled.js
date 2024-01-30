import styled, {css} from "styled-components";

export const TaskList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
`

export const TasksItems = styled.li`
    display: grid;
    word-wrap: break-word;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgb(238, 238, 238)

    ${({hidden})=> hidden && css`
    display: none;
    `}
`