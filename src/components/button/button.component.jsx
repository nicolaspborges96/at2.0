import { BotaoBasico, BotaoSvg } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    padrao: 'padrao',
    svg: 'svg'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.padrao) =>
({
    [BUTTON_TYPE_CLASSES.padrao]: BotaoBasico,
    [BUTTON_TYPE_CLASSES.svg]: BotaoSvg,
}[buttonType]);


const Button = ({ texto, buttonStyle, svg, ...otherProps }) => {
    const CustomButton = getButton(buttonStyle);
    return <CustomButton {...otherProps}>{svg}{texto}</CustomButton>;

};

export default Button;