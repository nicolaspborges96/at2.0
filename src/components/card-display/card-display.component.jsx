import { useContext } from "react";
import { CaculoContext } from "../../context/calculo.context";
import { CardContainer } from "./card-display.styles";
import { useState } from "react";
import Card from "../card/card.component";

const CardDisplay = ({...props}) => {

    const { resultados, isCardShown, setCardShown } = useContext(CaculoContext);

    return (
    <>
        { isCardShown === false ? (
            <></>
        ) : (
            <CardContainer>
                {
                    resultados.map((resultado, index) => (<Card dados={resultado} key={index} />))
                }
            </CardContainer>
        )
        }
    </>
        
    )
}

export default CardDisplay;