import { FolhaDisplayContainer } from "./folha-display.styles";
import { CalculoContext } from "../../context/calculo.context";
import { useContext } from "react";
import FolhaCard from "../folha-card/folha-card.component";
import { useState, useRef, useEffect } from "react";
import { Fragment } from "react";
import CardProlabore from "../card-prolabore/card-prolabore.component";

const FolhaDisplay = ({ ...props }) => {
    const {
        resultados,
        isCardShown,
        scroll,
        valorProlaboreAvulso,
        confirmaProLaboreAvulso,
    } = useContext(CalculoContext);

    const CardsRef = useRef(null);

    const scrollToCards = () => {
        CardsRef.current?.lastElementChild?.scrollIntoView();
    };

    useEffect(() => {
        scrollToCards();
    }, [scroll]);

    return (
        <>
            {isCardShown ? (
                <FolhaDisplayContainer ref={CardsRef}>
                    {resultados.map((resultado, index) => (
                        <Fragment key={index}>
                            {resultado.titulo === "anexoV" ? (
                                <></>
                            ) : (
                                <FolhaCard dados={resultado} key={index} />
                            )}
                        </Fragment>
                    ))}
                    <>
                    {confirmaProLaboreAvulso ? (
                    <CardProlabore dados={valorProlaboreAvulso} />) : (
                    <></>)}
                    {console.log(confirmaProLaboreAvulso)}
                    </>
                </FolhaDisplayContainer>
            ) : (
                <></>
            )}
        </>
    );
};

export default FolhaDisplay;
