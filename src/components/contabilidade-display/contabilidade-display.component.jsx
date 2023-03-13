import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CalculoContext } from "../../context/calculo.context";
import ContabilidadeCard from "../contabilidade-card/contabilidade-card.component";
import { ComparacaoCardContainer } from "./contabilidade-display.styles";


const ContabilidadeDisplay = ({...props}) => {
    
    const { isCardShown, enableContabilidadeComparison, setCardShown } = useContext(CalculoContext);
   
    return (
        <>  
        {
            enableContabilidadeComparison&&isCardShown ? (
                <>
                    <ComparacaoCardContainer >
                        <ContabilidadeCard />
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
