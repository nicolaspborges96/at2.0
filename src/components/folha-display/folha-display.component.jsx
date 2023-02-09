import { FolhaDisplayContainer } from "./folha-display.styles";
import { CalculoContext } from "../../context/calculo.context";
import { useContext } from "react";
import FolhaCard from "../folha-card/folha-card.component";

const FolhaDisplay = ({ ...props }) => {

    const { resultados, isCardShown } = useContext(CalculoContext);

    return (
        <>
            {
                isCardShown ? (
                    <FolhaDisplayContainer>
                        <FolhaCard  dados={resultados} /> 
                    </FolhaDisplayContainer>
                ) : (
                    <></>
                )
            }
        </>

    )
}

export default FolhaDisplay;