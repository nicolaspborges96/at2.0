import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import { FolhaCardBody } from "./folha-card.styles";
import { CardSegment } from "../card/card.styles";


const FolhaCard = ({...props}) => {

    const { resultados } = useContext(CalculoContext);
    const { inss, fgts, irrf, titulo, salario, salarioLiquido } = props.dados;

    function converteNumeroParaMoeda(number) {
        return Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(number);
    };
    
    function converteParaPorcentagem(number) {
        return Intl.NumberFormat('pt-Br', { style: 'percent', minimumFractionDigits: 2 }).format(number);
    }
    

    return (
        <FolhaCardBody>
            
            {
                titulo === 'folha' ? (
                    <>  
                        <CardSegment style={{display: 'block'}} bgColor={'#78ce1980'} padding={'0.5rem'} textAlign={'center'} fontWeight={'600'} bdRadius={'0.3rem'} whiteSpace={'pre-line'} >
                            <span>CLT</span>
                        </CardSegment>
                        <CardSegment>
                            <span>Salário</span> {converteNumeroParaMoeda(salario)}
                        </CardSegment>
                        <CardSegment color={'#ff000078'} >
                            <span>(-) INSS</span> {converteNumeroParaMoeda(inss)}
                        </CardSegment>
                        <CardSegment>
                            <span>FGTS</span> {converteNumeroParaMoeda(fgts)}
                        </CardSegment>
                        <CardSegment>
                            <span>(-) IRRF</span> {converteNumeroParaMoeda(irrf)}
                        </CardSegment>
                        <CardSegment>
                            <span>Salario Liquido</span> {converteNumeroParaMoeda(salarioLiquido)}
                        </CardSegment>
                        <CardSegment></CardSegment>
                        <CardSegment></CardSegment>
                        <CardSegment></CardSegment>
                       
                    </>
                ) : (
                    <></>
                )
            }
        </FolhaCardBody>
    )

}

export default FolhaCard;