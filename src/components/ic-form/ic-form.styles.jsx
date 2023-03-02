import styled from "styled-components";

export const IcFormStyled = styled.form`
    border: solid 1px #3a6600c1;
    margin: 0 auto ;
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 1rem 1.5rem;
    box-shadow: 0px 0px 10px 5px rgb(38 41 33 / 25%);
    border-radius: 0.5rem;
    background-color: #ffffff;

    label {
        margin: 0.7rem 0 0.3rem;
    }

    @media (max-width: 450px) {
        width: 305px;
        
    }
    @media (min-width: 1368px) {
        width: 650px;
        
    }

`