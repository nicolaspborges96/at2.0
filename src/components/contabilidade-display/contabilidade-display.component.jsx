import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import ContabilidadeCard from "../contabilidade-card/contabilidade-card.component";
import { ComparacaoCardContainer } from "./contabilidade-display.styles";


const ContabilidadeDisplay = ({...props}) => {

    const { isCardShown, enableContabilidadeComparison } = useContext(CalculoContext);
    
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
