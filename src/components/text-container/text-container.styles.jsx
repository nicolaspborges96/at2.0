import styled from "styled-components";

export const TxtContainerStyled = styled.div`
    border: solid 1px #3a6600c1;
    //margin: ${props => props.margin} ;
    text-align: ${props => props.textAlign};
    display: flex;
    flex-direction: column;
    width: 88%;
    padding: 0.5rem ;
    //box-shadow: 0px 0px 10px 5px rgb(38 41 33 / 25%);
    border-radius: 0.5rem;
    background-color: #ffffff;
    font-size: 0.7rem;
    margin: 1.5rem auto 0;

    label {
        margin: 0.7rem 0 0.3rem;
    }

    @media (max-width: 450px) {
        //width: 50%;
        
    }
    @media (min-width: 1368px) {
        //width: 50%;
        
    }
`