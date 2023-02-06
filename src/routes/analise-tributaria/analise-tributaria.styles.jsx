import styled from 'styled-components';

export const AnaliseTContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    height: 90vh;
    flex-direction: column;
    font-size: 0.9rem;
`

export const ContainerHeaderAnaliseT = styled.div`
    
    display: flex;
    
    justify-content: space-evenly;
    margin-bottom: 2rem;
`
export const ContainerLogo = styled.div`
    width: 200px;
    margin: auto 0;
`
export const StyledSpan = styled.span`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    margin: ${props => props.margin};
    font-weight: ${props => props.fontWeight}

`