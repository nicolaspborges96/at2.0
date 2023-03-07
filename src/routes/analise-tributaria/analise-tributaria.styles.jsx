import styled from 'styled-components';

export const AnaliseTContainer = styled.div`
    background-color: inherit;
    padding: 30px 20px;
    display: flex;
    height: 90vh;
    flex-direction: column;
    font-size: 0.9rem;

    @media (max-width: 450px) {
        display: flex;
        padding: 20px 5px;
        
    }
`

export const ContainerHeaderAnaliseT = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;

    @media (max-width: 450px) {
        flex-wrap: wrap;
        
    }
`
export const ContainerLogo = styled.div`
    width: 200px;
    margin: auto 0;
    padding: 0.3rem;
    :hover{
        cursor: pointer;
        border: 1px solid #c3c8ced4;
        border-radius: 5px;
    }
`
export const StyledSpan = styled.span`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    margin: ${props => props.margin};
    font-weight: ${props => props.fontWeight}

`;
