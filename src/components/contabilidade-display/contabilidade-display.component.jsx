import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CalculoContext } from "../../context/calculo.context";
import ContabilidadeCardDetalhado from "../contabilidade-card-detalhado/contabilidade-card-detalhado.component";
import ContabilidadeCard from "../contabilidade-card/contabilidade-card.component";
import { ComparacaoCardContainer } from "./contabilidade-display.styles";


const ContabilidadeDisplay = ({...props}) => {
    
    const { isCardShown, enableContabilidadeComparison, setCardShown, cardDetalhado } = useContext(CalculoContext);
   
    return (
        <>  
        {
            enableContabilidadeComparison&&isCardShown ? (
                <>
                    <ComparacaoCardContainer >
                        {
                            cardDetalhado === true ? (
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
