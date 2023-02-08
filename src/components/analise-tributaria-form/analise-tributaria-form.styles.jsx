import styled from 'styled-components'

export const AnaliseTFormStyled = styled.form`
    //border: solid 1px #3a6600c1;
    margin: auto auto 1rem;
    display: flex;
    flex-direction: column;
    width: 400px;
    //border: 1px solid #a6a7a8;
    padding: 0.5rem 1.5rem;
    box-shadow: 0px 0px 10px 5px rgb(38 41 33 / 15%);
    border-radius: 0.5rem;
    background-color: #ffffff;

    label {
        margin: 0.7rem 0 0.3rem;
    }
    
`

export const AnaliseTContainerCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & label:nth-child(4){
        margin-left: 0;
    }

    & label:nth-child(3){
        margin-right: 1.1rem;
    }
    
    
`
