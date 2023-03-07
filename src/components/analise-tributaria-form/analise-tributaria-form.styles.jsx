import styled from 'styled-components'

export const AnaliseTFormStyled = styled.form`
    border: solid 1px #3a6600c1;
    margin: 0 auto ;
    
    display: flex;
    flex-direction: column;
    width: 400px;
    //border: 1px solid #8d8d8dc1;
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
    @media (min-width: 1360px) {
        width: 650px;
        //margin-top: 6rem;
    }
    
`

export const AnaliseTContainerCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & label:nth-child(4){
        margin-left: 0;
    }

    & label:nth-child(6){
        margin-left: 0;
    }

    & label:nth-child(3){
        margin-right: 1.1rem;
    }

    @media (max-width: 450px) {
        
        & label:nth-child(2){
        margin-left: 0.7rem;
    }
        & label:nth-child(3){
        margin-right: 0.4rem;
    }
        & label:nth-child(5){
        margin-left: 0.2rem;
    }
        & label:nth-child(7){
        margin-left: 0rem;
    }
    }
    @media (min-width: 451px) and (max-width: 1360px) {
        
        & label:nth-child(5){
        margin-left: 0.1rem;
        }
        & label:nth-child(6){
        margin-right: 0.75rem;
        }
        & label:nth-child(7){
        margin-left: 0;
    }
    }
    @media (min-width: 1360px) {
        //width: 60%;
        //margin: 0 auto;
        & label:nth-child(5){
        margin-left: 0.1rem;
        }
        & label:nth-child(6){
        margin-right: 0.7rem;
        }
        & label:nth-child(7){
        margin-left: -0.3rem;
    }
    }
    
    
    
`

export const CheckBoxDetalharCard = styled.div`
    //background-color: #78ce1980;
    margin: 1.5rem auto  0;
    width: 30%;
    padding: 0.2rem;
    border-radius: 5px;
    //border: 1px solid #c3c8ced4;
    //box-shadow: 0px 0px 10px 5px rgb(38 41 33 / 25%);
    align-self: end;
    

`
