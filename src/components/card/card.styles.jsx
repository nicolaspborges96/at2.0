import styled from 'styled-components';

export const CardBody = styled.div`
    border: solid 1px #c3c8ced4;
    border-radius: 0.5rem;
    padding: 0.6rem;
    margin: 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    min-height: 310px;
    min-width: 270px;

    div:last-of-type {
        align-self: bottom;
    }

`;

export const CardSegment = styled.div`
    display: ${props => props.display};
    background-color: ${props => props.bgColor};
    margin: ${props => props.margin};
    border-radius: ${props => props.bdRadius};
    width: ${props => props.width};
    text-align: ${props => props.textAlign};
    font-weight: ${props => props.fontWeight};
    padding: ${props => props.padding};
    height: ${props => props.height};
    white-space: ${props => props.whiteSpace};
    justify-content: ${props => props.justifyContent};
    padding: 0.1rem;
    font-size: ${props => props.fontSize}
    
`;

export const BlocoResultado = styled.div`
    margin: auto 0 0 0;
    background-color: ${props => props.bgColor};
    border-radius: ${props => props.bdRadius};
    font-weight: ${props => props.fontWeight};
`