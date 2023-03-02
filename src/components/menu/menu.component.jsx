import { MenuContainer } from "./menu.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    const goToAnaliseT = () => {
        navigate("/at");
    };

    const goToFolha = () => {
        navigate("/folha");
    };

    const goToIndCom = () => {
        navigate("/ic");
    };

    const goToEfetiva = () => {
        navigate("/ae")
    }

    return (
        <MenuContainer>
            <Button
                buttonStyle={BUTTON_TYPE_CLASSES.svg}
                width={"80%"}
                height={"80%"}
                bgColor={"#f0f0f0"}
                margin={"auto"}
                texto={"Análise Tributária"}
                border={"2px solid #dbdfcb"}
                color={"#396600"}
                hover={"border: 2px solid #a5c017; color:#a5c017"}
                onClick={goToAnaliseT}
            />
            <Button
                buttonStyle={BUTTON_TYPE_CLASSES.svg}
                width={"80%"}
                height={"80%"}
                bgColor={"#f0f0f0"}
                margin={"auto"}
                texto={"CLT x PJ"}
                border={"2px solid #dbdfcb"}
                color={"#396600"}
                hover={"border: 2px solid #a5c017; color:#a5c017"}
                onClick={goToFolha}
            />
            <Button
                buttonStyle={BUTTON_TYPE_CLASSES.svg}
                width={"80%"}
                height={"80%"}
                bgColor={"#f0f0f0"}
                margin={"auto"}
                texto={"Indústria & Comércio"}
                border={"2px solid #dbdfcb"}
                color={"#396600"}
                hover={"border: 2px solid #a5c017; color:#a5c017"}
                onClick={goToIndCom}
            />
            <Button
                buttonStyle={BUTTON_TYPE_CLASSES.svg}
                width={"80%"}
                height={"80%"}
                bgColor={"#f0f0f0"}
                margin={"auto"}
                texto={"Alíquota Efetiva"}
                border={"2px solid #dbdfcb"}
                color={"#396600"}
                hover={"border: 2px solid #a5c017; color:#a5c017"}
                onClick={goToEfetiva}
            />
        </MenuContainer>
    );
};

export default Menu;