import { Fragment } from "react";
import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import EfetivaCard from "../efetiva-card/efetiva-card.component";
import { EfetivaDisplayContainer } from "./efetiva-display.styles";



const EfetivaDisplay = () => {
    const { resultados, isCardShown, faturamentoMes } = useContext(CalculoContext);
    
    return (
        <EfetivaDisplayContainer>
            
            {
                isCardShown ? (
                    resultados.map((resultado, index) => (
                        <Fragment key={index}>
                            <EfetivaCard dados={resultado} faturamentoMes={faturamentoMes} />
                        </Fragment>
                    ))
                ) : (
                    <></>
                )
            }
        </ EfetivaDisplayContainer >
    )

}

export default EfetivaDisplay;

