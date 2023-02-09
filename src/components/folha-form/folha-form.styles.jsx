import styled from "styled-components";

export const FolhaContainerBody = styled.div`
    background-color: #ffffff;
    width: 55%;
    margin: 0 auto;
    border-radius: 10px;
    padding-bottom: 2rem;
`

export const FormFolha = styled.form`
    display: grid;
    grid-column-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
    margin: 2rem auto;
    
    padding
    input {
        margin: 0.3rem 0.7rem 0 0;
    }
`