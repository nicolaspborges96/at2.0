import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import ContabilidadeCard from "../contabilidade-card/contabilidade-card.component";
import { ComparacaoCardContainer } from "./contabilidade-display.styles";


const ContabilidadeDisplay = ({...props}) => {

    const { comparacaoCont } = useContext(CalculoContext);

    return (
        <>  
            {
                console.log(comparacaoCont)
            }
            {
            
            comparacaoCont ? (
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
