import { useContext, useEffect } from "react";
import { CaculoContext } from "../../context/calculo.context";
import { CardContainer } from "./card-display.styles";
import { useState, useRef } from "react";
import Card from "../card/card.component";


const CardDisplay = ({...props}) => {

    const { resultados, isCardShown, setCardShown, scroll, setScroll } = useContext(CaculoContext);

    const CardsRef = useRef(null);

    const scrollToCards = () => {

        CardsRef.current?.lastElementChild?.scrollIntoView();
    }

    useEffect(() => {
        scrollToCards();
    }, [scroll])

    return (
    <>
        { isCardShown === false ? (
            <></>
        ) : (
            <CardContainer ref={CardsRef} >
                {
                    resultados.map((resultado, index) => (<Card dados={resultado} key={index} />))
                    
                }
                {
                    setScroll(false)
                }
            </CardContainer>
        )
        }
    </>
        
    )
}

export default CardDisplay;