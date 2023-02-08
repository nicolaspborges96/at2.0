import styled from 'styled-components';

export const CardBody = styled.div`
    //border: solid 1px #3a6600c1;
    border-radius: 0.5rem;
    padding: 0.6rem;
    margin: 2rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    min-height: 310px;
    min-width: 270px;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 5px rgb(38 41 33 / 15%);
    overflow-wrap: break-word;
    inline-size: 240px;
    text-align: justify;

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