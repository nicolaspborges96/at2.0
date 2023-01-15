import { MenuContainer } from "./menu.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    const goToAnaliseT = () => {
        navigate('/at')
    }

    return (
        <MenuContainer>
            <Button buttonStyle={BUTTON_TYPE_CLASSES.svg} width={'80%'} height={'80%'} bgColor={'#f0f0f0'} margin={'auto'} texto={'Análise Tributária'} 
                border={'2px solid #dbdfcb'} color={'#396600'} hover={'border: 2px solid #a5c017; color:#a5c017'} onClick={goToAnaliseT} />
            <Button buttonStyle={BUTTON_TYPE_CLASSES.svg} width={'80%'} height={'80%'} bgColor={'#a5c017'} margin={'auto'} texto={'CLT x PJ'} 
                border={'2px solid #dbdfcb'} color={'#5B5C5D'} hover={'border: 2px solid #a5c017; color:#a5c017'} />
            <Button buttonStyle={BUTTON_TYPE_CLASSES.svg} width={'80%'} height={'80%'} bgColor={'#a4c0175e'} margin={'auto'} texto={'Indústria & Comércio'} 
                border={'2px solid #dbdfcb'} color={'#5B5C5D'} hover={'border: 2px solid #a5c017; color:#a5c017'} />
            <Button buttonStyle={BUTTON_TYPE_CLASSES.svg} width={'80%'} height={'80%'} bgColor={'#a4c0175e'} margin={'auto'} texto={'Alíquota Efetiva'} 
                border={'2px solid #dbdfcb'} color={'#5B5C5D'} hover={'border: 2px solid #a5c017; color:#a5c017'} />
        </MenuContainer>
    )

}

export default Menu;