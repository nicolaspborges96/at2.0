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
                        {
                            resultados.map((resultado, index) => (<FolhaCard  dados={resultado} key={index} />))
                        }
                         
                    </FolhaDisplayContainer>
                ) : (
                    <></>
                )
            }
        </>

    )
}

export default FolhaDisplay;