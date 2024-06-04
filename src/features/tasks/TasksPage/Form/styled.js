import styled from "styled-components";

export const AddNewTaskButton = styled.button`
    background-color: teal;
    color: white;
    font-size: 20px;
    border-style: none;
    padding: 11px;
    border-radius: 5px;
    transition: 1s;

    &:hover {
        transform: scale(1.1);
    };
`;

export const FormContent = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;

    @media (max-width: 767px) {
    display: block;
    
};
`;
