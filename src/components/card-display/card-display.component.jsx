import { useContext, useEffect } from "react";
import { CalculoContext } from "../../context/calculo.context";
import { CardContainer } from "./card-display.styles";
import { useState, useRef } from "react";
import Card from "../card/card.component";


const CardDisplay = ({...props}) => {

    const { resultados, isCardShown, scroll, vencedor } = useContext(CalculoContext);

    const CardsRef = useRef(null);

    const scrollToCards = () => {

        CardsRef.current?.lastElementChild?.scrollIntoView();
    }

    useEffect(() => {
        scrollToCards();
    }, [scroll]);

    
    return (
    <>
        { isCardShown === false ? (
            <></>
        ) : (
            <CardContainer ref={CardsRef}  >
                {
                    resultados.map((resultado, index) => (<Card dados={resultado} key={index} vencedor={vencedor} />))
                    
                }
                
                
            </CardContainer>
        )
        }
    </>
        
    )
}

export default CardDisplay;