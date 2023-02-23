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
    grid-column-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
    margin: 2rem auto;
    
    
    input {
        margin: 0.2rem 0.7rem 0 0;
    }

    label:last-of-type {
        grid-column: span 2;
        margin-top: 0.4rem;
    }
`