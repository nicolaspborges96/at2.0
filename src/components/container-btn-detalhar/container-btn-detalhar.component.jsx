import { ContainerBtn } from "./container-btn-detalhar.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ReactComponent as PlusIcon } from "../../assets/plus-svgrepo-com.svg";
import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import { ReactComponent as MinusIcon } from "../../assets/minus-svgrepo-com.svg";
import TextContainer from "../text-container/text-container.component";

const ContainerBtnDetalhar = ({ ...props }) => {
    const { cardDetalhado, setCardDetalhado, isCardShown, naoCompara } =
        useContext(CalculoContext);

    return (
        <>
            {isCardShown ? (
                <ContainerBtn>
                    {/*naoCompara ? (
                        <TextContainer
                            texto={
                                "Não é correto comparar comércio/indústria com os demais, já que os outros são prestação de serviço!"
                            }
                            margin={'0 auto'}
                        />
                    ) : (
                        <></>
                    )*/}
                    {cardDetalhado ? (
                        <Button
                            texto={"Ocultar"}
                            buttonStyle={BUTTON_TYPE_CLASSES.svg}
                            border={"1px solid #c3c8ced4"}
                            margin={"1rem 0 auto auto"}
                            bgColor={"#ffffff"}
                            width={"100px"}
                            hover={"border: 1px solid #a5c017; color:#396600"}
                            svg={<MinusIcon />}
                            onClick={() => setCardDetalhado(false)}
                            fontSize={"0.8rem"}
                        />
                    ) : (
                        <Button
                            texto={"Detalhar"}
                            buttonStyle={BUTTON_TYPE_CLASSES.svg}
                            border={"1px solid #c3c8ced4"}
                            margin={"1rem 0 auto auto"}
                            bgColor={"#ffffff"}
                            width={"100px"}
                            hover={"border: 1px solid #a5c017; color:#396600"}
                            svg={<PlusIcon />}
                            onClick={() => setCardDetalhado(true)}
                            fontSize={"0.8rem"}
                        />
                    )}
                </ContainerBtn>
            ) : (
                <></>
            )}
        </>
    );
};

export default ContainerBtnDetalhar;
