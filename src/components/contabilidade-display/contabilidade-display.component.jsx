import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CalculoContext } from "../../context/calculo.context";
import ContabilidadeCardDetalhado from "../contabilidade-card-detalhado/contabilidade-card-detalhado.component";
import ContabilidadeCard from "../contabilidade-card/contabilidade-card.component";
import { ComparacaoCardContainer } from "./contabilidade-display.styles";


const ContabilidadeDisplay = ({...props}) => {
    
    const { isCardShown, enableContabilidadeComparison, setCardShown, cardDetalhado, dadosComparacaoContabilidades } = useContext(CalculoContext);
    const { socios } = dadosComparacaoContabilidades;


    return (

        <>  
        {
            enableContabilidadeComparison&&isCardShown ? (
                <>
                    <ComparacaoCardContainer >
                        {
                            socios > 1 ? (
                                <ContabilidadeCardDetalhado />
                            ) : (
                                <ContabilidadeCard />
                            )
                        }
                        
                    </ComparacaoCardContainer>
                
                </>
            ) : (
                <></>
            )
        }
        </>
        
    )

}

export default ContabilidadeDisplay;
