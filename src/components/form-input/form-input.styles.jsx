import styled from "styled-components";


export const Group =styled.div`
    display:flex;
    flex-direction: column;
    //width: 70%;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    
`

export const SearchInput = styled.input`
    background-color:transparent;
    border: 1px solid #ebedf2;
    outline:none;
    padding: 0.4rem;
    border-radius: 5px;

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

    &:focus {
        border-color: #396600;
    }
`