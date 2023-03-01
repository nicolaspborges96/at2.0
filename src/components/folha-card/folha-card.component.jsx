import { useContext } from 'react';
import { CalculoContext } from '../../context/calculo.context';
import { useEffect } from 'react';
import { FolhaCardBody } from "./folha-card.styles";
import { CardSegment } from "../card/card.styles";


const FolhaCard = ({...props}) => {

    const { inssClt, fgts, irrfClt, titulo, salario, salarioLiquido, valeAlimentacao, valeTransporte, 
            planoSaude, beneficios, decTerceiroProp, remuneracaoLiq, das, inss, irrf, patronal, feriasProp, 
            totalBeneficios, faturamento } = props.dados;
    
    const { scroll, setScroll } = useContext(CalculoContext);

    const key = props.key;
    const mensalidade = 109.90;
    const calculaPjLiquido = (faturamento, das, inss, irrf, patronal, mensalidade) => {
        const liquido = faturamento - das - inss - irrf - patronal - mensalidade;

        return liquido;
    } 

    function converteNumeroParaMoeda(number) {
        return Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(number);
    };
    
    function converteParaPorcentagem(number) {
        return Intl.NumberFormat('pt-Br', { style: 'percent', minimumFractionDigits: 2 }).format(number);
    }

    useEffect(() => {
        setScroll(false);
    });

    return (
        <FolhaCardBody key={key}>
            {
                titulo === 'folha' ? (
                    <>  
                        <CardSegment style={{display: 'block'}} bgColor={'#78ce1980'} padding={'0.5rem'} textAlign={'center'} fontWeight={'600'} bdRadius={'0.3rem'} whiteSpace={'pre-line'} >
                            <span>CLT</span>
                        </CardSegment>
                        <CardSegment>
                            <span>Salário</span> {converteNumeroParaMoeda(salario)}
                        </CardSegment>
                        <CardSegment color={'#ac0202'} >
                            <span>(-) INSS</span> {converteNumeroParaMoeda(inssClt)}
                        </CardSegment>
                        <CardSegment color={'#ac0202'}>
                            <span>(-) IRRF</span> {converteNumeroParaMoeda(irrfClt)}
                        </CardSegment>
                        <CardSegment style={{backgroundColor:'#ced4da66', marginBottom:'0.5rem'}}>
                            <span>Salario Liquido</span> {converteNumeroParaMoeda(salarioLiquido)}
                        </CardSegment>
                        <CardSegment>
                            <span>FGTS</span> {converteNumeroParaMoeda(fgts)}
                        </CardSegment>
                        <CardSegment>
                            <span>13º Proporcional</span> {converteNumeroParaMoeda(decTerceiroProp)}
                        </CardSegment>
                        <CardSegment>
                            <span>Férias Proporcional</span> {converteNumeroParaMoeda(feriasProp)}
                        </CardSegment>
                        <CardSegment>
                            <span>Benefícios</span> {converteNumeroParaMoeda(totalBeneficios)}
                        </CardSegment>
                        <CardSegment style={{backgroundColor:'#78ce1980', marginTop:'auto'}}  >
                            <span>Remuneração final</span> {converteNumeroParaMoeda(remuneracaoLiq)}
                        </CardSegment>
                       
                    </>
                ) : (
                    <>
                        <CardSegment style={{display: 'block'}} bgColor={'#78ce1980'} padding={'0.5rem'} textAlign={'center'} fontWeight={'600'} bdRadius={'0.3rem'} whiteSpace={'pre-line'} >
                            <span>PJ</span>
                        </CardSegment>
                        <CardSegment>
                            <span>Salario bruto</span> {converteNumeroParaMoeda(faturamento)}
                        </CardSegment>
                        <CardSegment color={'#ac0202'}>
                            <span>(-) DAS</span> {converteNumeroParaMoeda(das)}
                        </CardSegment>
                        <CardSegment color={'#ac0202'}>
                            <span>(-) INSS</span> {converteNumeroParaMoeda(inss)}
                        </CardSegment>
                        {
                            irrf ? (
                                <CardSegment color={'#ac0202'}>
                                    <span>(-) IRRF</span> {converteNumeroParaMoeda(irrf)}
                                </CardSegment>
                            ) : (
                                <></>
                            )
                        }
                        {
                            patronal ? (
                                <CardSegment color={'#ac0202'}>
                                    <span>(-) Patronal</span> {converteNumeroParaMoeda(patronal)}
                                </CardSegment>
                            ) : (
                                <></>
                            )
                        }
                        <CardSegment color={'#ac0202'}>
                            <span>(-) Mensalidade</span> {converteNumeroParaMoeda(mensalidade)}
                        </CardSegment>
                        <CardSegment  style={{backgroundColor:'#78ce1980', marginTop:'auto'}}>
                            <span>Remuneração líquida</span> {converteNumeroParaMoeda(calculaPjLiquido(faturamento, das, inss, 
                                irrf, patronal, mensalidade))}
                        </CardSegment>
                        
                    </>
                )
            }
        </FolhaCardBody>
    )

}

export default FolhaCard;