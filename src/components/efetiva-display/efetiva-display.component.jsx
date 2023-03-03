import { Fragment } from "react";
import { useContext, useEffect, useRef } from "react";
import { CalculoContext } from "../../context/calculo.context";
import EfetivaCard from "../efetiva-card/efetiva-card.component";
import { EfetivaDisplayContainer } from "./efetiva-display.styles";



const EfetivaDisplay = () => {
    const { resultados, isCardShown, faturamentoMes, scroll } =
        useContext(CalculoContext);

    const CardsRef = useRef(null);

    const scrollToCards = () => {
        CardsRef.current?.lastElementChild?.scrollIntoView();
    };

    useEffect(() => {
        scrollToCards();
    }, [scroll]);

    return (
        <EfetivaDisplayContainer>
            {isCardShown ? (
                resultados.map((resultado, index) => (
                    <div key={index} ref={CardsRef} >
                        <EfetivaCard
                            dados={resultado}
                            faturamentoMes={faturamentoMes}
                        />
                    </div>
                ))
            ) : (
                <></>
            )}
        </EfetivaDisplayContainer>
    );
};

export default EfetivaDisplay;

