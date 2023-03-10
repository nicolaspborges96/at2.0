import styled from "styled-components";

export const FolhaContainerBody = styled.div`
    border: solid 1px #3a6600c1;
    background-color: #ffffff;
    min-width: 75%;
    margin: 0 auto;
    padding-bottom: 2rem;
    box-shadow: 0px 0px 10px 5px rgb(38 41 33 / 25%);
    border-radius: 0.5rem;
    
    
    @media (max-width: 450px) {
        width: 100%;
    }
`

export const FormFolha = styled.form`
    display: grid;
    grid-column-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin: 2rem auto;
    
    input {
        margin: 0.2rem 0.7rem 0 0;
    }

    label:last-of-type {
        //grid-column: span 2;
        margin-top: 0.4rem;
    }

    @media (max-width: 900px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const LabelFormFolha = styled.label`
    //margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

`
export const ContainerSwitchFolha = styled.div`
    margin-top: 0.5rem;

    span {
        margin-left: 0.5rem;
    }

    @media (min-width: 900px) {
        margin-top: 2rem;
    }

`