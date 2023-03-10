import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import ContabilidadeCard from "../contabilidade-card/contabilidade-card.component";
import { ComparacaoCardContainer } from "./contabilidade-display.styles";


const ContabilidadeDisplay = ({...props}) => {

    const { versusContabilidades } = useContext(CalculoContext);

    return (
        <>  
        {
            
            versusContabilidades ? (
                <>
                    <ComparacaoCardContainer className="alou" >
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
