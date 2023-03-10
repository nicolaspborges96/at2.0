import styled from "styled-components"

export const ContCardBody = styled.div`
    border: solid 1px #3a6600c1;
    border-radius: 0.5rem;
    padding: 0.4rem;
    margin: 2rem 1rem 1rem 1rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 5px rgb(38 41 33 / 25%);
    
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 290px;
    }
`

export const ContainerContCardBloco =styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
`

export const ContCardBloco = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    width: 210px;

    div {
        margin: 0.1rem 0 0.1rem;
    }

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`