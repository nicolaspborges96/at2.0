import styled from "styled-components";

export const FolhaContainerBody = styled.div`
    background-color: #ffffff;
    width: 55%;
    margin: 0 auto;
    padding-bottom: 2rem;
    box-shadow: 0px 0px 10px 5px rgb(38 41 33 / 25%);
    border-radius: 0.5rem;
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