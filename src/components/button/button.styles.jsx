import styled from "styled-components";

const corTexto = '#FFFFFF';
const corFundo ='#a5c017'

export const BotaoBasico = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline:none;
    border: 1px solid transparent;
    text-align:center;
    width: 130px;
    height: 40px;
    border-radius: 10px;
    margin-top: 2rem;
    font-size: 0.9rem;
    font-weight: 600;
    opacity:0.9;
    
`

export const BotaoSvg = styled(BotaoBasico)`
    justify-content: space-evenly;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    width: ${props => props.width};
    height: ${props => props.height};
    opacity: ${props => props.opacity};
    font-size: ${props => props.fontSize};
    margin: ${props => props.margin};
    align-self: ${props => props.alignSelf};
    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    align-items: ${props => props.alignItems};
    text-align: ${props => props.textAlign};
    border-radius: ${props => props.borderRadius};
    padding: ${props => props.padding};
    font-weight: ${props => props.fontWeight};
    border: ${props => props.border};

    &:hover {
        ${props => props.hover}
    }
    
`