import { TxtContainerStyled } from "./text-container.styles";


const TextContainer = ({texto, ...props}) => {
    return (
        <TxtContainerStyled {...props} >
            <span>{texto}</span>
        </TxtContainerStyled>
        
    )
}

export default TextContainer;