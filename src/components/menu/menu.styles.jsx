import styled from "styled-components";

export const MenuContainer = styled.div`
    
    //margin: auto;
    display: grid;
    //grid-template-columns: repeat(2, 1fr);
    //width: 55%;
    height: 70%;
    background-color: #ffffff;
    border-radius: 10px;
    border: solid 1px #3a6600c1;
    padding: 1rem;
    box-shadow: 0px 0px 10px 5px rgb(38 41 33 / 25%);
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 450px) {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 55%;
    height: 40%;
    background-color: #ffffff;
    border-radius: 10px;
    
    padding: 1rem;
    box-shadow: 0px 0px 10px 5px rgb(38 41 33 / 25%);

    /*button:first-of-type {
        grid-column: span 2;
        width: 90%;
    }*/
    }

`
