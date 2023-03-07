import { useContext, useEffect } from "react";
import { CalculoContext } from "../../context/calculo.context";
import { CardContainer } from "./card-display.styles";
import { useState, useRef } from "react";
import Card from "../card/card.component";
import CardDetalhado from "../card-detalhado/card-detalhado";
import TextContainer from "../text-container/text-container.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const CardDisplay = ({ ...props }) => {
    const {
        resultados,
        isCardShown,
        scroll,
        vencedor,
        setResultados,
        cardDetalhado
    } = useContext(CalculoContext);

    useEffect(() => {
        setResultados([]);
    }, []);

    const CardsRef = useRef(null);

    const scrollToCards = () => {
        CardsRef.current?.lastElementChild?.scrollIntoView();
    };

    useEffect(() => {
        scrollToCards();
    }, [scroll]);

    return (
        <>
            {isCardShown === false ? (
                <></>
            ) : (
                <>
                
                <CardContainer ref={CardsRef}>
                    {cardDetalhado === true ? (
                        <>
                            {resultados.map((resultado, index) => (
                                <CardDetalhado
                                    dados={resultado}
                                    key={index}
                                    vencedor={vencedor}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {resultados.map((resultado, index) => (
                                <Card
                                    dados={resultado}
                                    key={index}
                                    vencedor={vencedor}
                                />
                            ))}
                        </>
                    )}
                </CardContainer>
                </>
                
            )}
        </>
    );
};

export default CardDisplay;
