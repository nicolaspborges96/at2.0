import styled from "styled-components";


export const Group =styled.div`
    display:flex;
    flex-direction: column;
    width: ${props => props.width};
    margin-bottom: 0.3rem;
    font-size: 0.9rem;

    @media (max-width: 900px) {
        width: 100%;
    }
    
    @media (min-width: 1250px) {
        width: 100%;
    }

`

export const SearchInput = styled.input`
    background-color:transparent;
    border: 1px solid #d1d2d6;
    outline:none;
    padding: 0.4rem;
    border-radius: 5px;
    width: ${props => props.width};
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
`;

export const PrefixSpan = styled.span`
    text-align: center;
    margin: auto 0 0;
    //background-color: ;
    padding: 0.2rem;
    border: 1px solid #d1d2d6;
    border-radius: 5px;
`;

export const PrefixAndInputContainer = styled.div`
    display: flex;
    width: 100%;

`;