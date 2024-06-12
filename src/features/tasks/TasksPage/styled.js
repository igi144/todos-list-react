import styled, { css } from "styled-components";

export const Tasksbuttons = styled.button`
    color: teal;
    background-color: white;
    border-style: none;
    transition: 1s;
    text-align: center;

    &:hover {
        color: hsl(180, 100%, 40%);
    }

${({ $primary }) => $primary && css`
    &:disabled {color: rgb(182, 182, 182)}
}
` }`;

export const ExampleButton = styled.button`
 color: teal;
    background-color: white;
    border-style: none;
    transition: 1s;
    text-align: center;
    
    ${({ $primary }) => $primary && css`
    &:disabled {color: rgb(182, 182, 182)}
}
` }`
