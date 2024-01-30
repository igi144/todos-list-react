import styled, { css } from "styled-components";

export const Tasksbuttons = styled.button`
    color: teal;
    background-color: white;
    border-style: none;
    transition: 1s;
    text-align: center;

    ${({$primary}) => $primary && css`
    :disabled{
    color: rgb(182, 182, 182)
}
` }`;
