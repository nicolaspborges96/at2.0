import styled from 'styled-components';

export const CardBody = styled.div`
    border: solid 1px #ced4da66;
    border-radius: 0.5rem;
    padding: 0.6rem;
    margin: 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    min-height: 410px;
    min-width: 270px;

    

`

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
    

`