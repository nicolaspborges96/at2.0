import { CalculoContext } from "../../context/calculo.context";
import { FolhaCardBody } from "./folha-card.styles";


const FolhaCard = ({...props}) => {

    const { inss, fgts, irrf, titulo } = props.dados;

    console.log(props.dados)
    return (
        <FolhaCardBody>
            
            {
                titulo === 'folha' ? (
                    <>
                    
                        <span>{inss}</span>
                        <span>{irrf}</span>
                        <span>{fgts}</span>
                    </>
                ) : (
                    <></>
                )
            }
        </FolhaCardBody>
    )

}

export default FolhaCard;