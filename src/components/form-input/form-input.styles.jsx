import styled from "styled-components";


export const Group =styled.div`
    display:flex;
    flex-direction: column;
    //width: 70%;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;

    @media (max-width: 700px) {
        width: 100%;
    }
    
`

export const SearchInput = styled.input`
    background-color:transparent;
    border: 1px solid #d1d2d6;
    outline:none;
    padding: 0.4rem;
    border-radius: 5px;
    //width: 70%;

    &:focus {
        border-color: #396600;
    }
`

export const SearchButtonContainer = styled.div`
    display: flex;
`
export const SelectInput = styled.select`
    background-color: transparent;
    border: 1px solid #ebedf2;
    outline:none;
    padding: 0.4rem;
    border-radius: 5px;
    margin-left: .5rem;

    &:focus {
        border-color: #396600;
    }
`