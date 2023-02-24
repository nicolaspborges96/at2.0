
import { FolhaCardBody } from "./folha-card.styles";
import { CardSegment } from "../card/card.styles";


const FolhaCard = ({...props}) => {

    const { inssClt, fgts, irrfClt, titulo, faturamento, faturamentoLiquido, valeAlimentacao, valeTransporte, 
            planoSaude, beneficios, decTerceiroProp, remuneracaoLiq, das, inss, irrf, patronal } = props.dados;
    const key = props.key;

    function converteNumeroParaMoeda(number) {
        return Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(number);
    };
    
    function converteParaPorcentagem(number) {
        return Intl.NumberFormat('pt-Br', { style: 'percent', minimumFractionDigits: 2 }).format(number);
    }

    return (
        <FolhaCardBody key={key}>
            {console.log(props.dados)}
            {
                titulo === 'folha' ? (
                    <>  
                        <CardSegment style={{display: 'block'}} bgColor={'#78ce1980'} padding={'0.5rem'} textAlign={'center'} fontWeight={'600'} bdRadius={'0.3rem'} whiteSpace={'pre-line'} >
                            <span>CLT</span>
                        </CardSegment>
                        <CardSegment>
                            <span>Salário</span> {converteNumeroParaMoeda(faturamento)}
                        </CardSegment>
                        <CardSegment color={'#ff000078'} >
                            <span>(-) INSS</span> {converteNumeroParaMoeda(inssClt)}
                        </CardSegment>
                        <CardSegment color={'#ff000078'}>
                            <span>(-) IRRF</span> {converteNumeroParaMoeda(irrfClt)}
                        </CardSegment>
                        <CardSegment style={{backgroundColor:'#ced4da66', marginBottom:'0.5rem'}}>
                            <span>Salario Liquido</span> {converteNumeroParaMoeda(faturamentoLiquido)}
                        </CardSegment>
                        <CardSegment>
                            <span>FGTS</span> {converteNumeroParaMoeda(fgts)}
                        </CardSegment>
                        <CardSegment>
                            <span>13º Proporcional</span> {converteNumeroParaMoeda(decTerceiroProp)}
                        </CardSegment>
                        <CardSegment>
                            <span>VR/VA</span> {converteNumeroParaMoeda(valeAlimentacao)}
                        </CardSegment>
                        <CardSegment>
                            <span>VT</span> {converteNumeroParaMoeda(valeTransporte)}
                        </CardSegment>
                        <CardSegment>
                            <span>Plano de Saúde</span> {converteNumeroParaMoeda(planoSaude)}
                        </CardSegment>
                        <CardSegment>
                            <span>Benefícios</span> {converteNumeroParaMoeda(beneficios)}
                        </CardSegment>
                        <CardSegment style={{backgroundColor:'#78ce1980', marginTop:'auto'}}  >
                            <span>Remuneração liquida</span> {converteNumeroParaMoeda(remuneracaoLiq)}
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
                        <CardSegment>
                            <span>(-) DAS</span> {converteNumeroParaMoeda(das)}
                        </CardSegment>
                        <CardSegment>
                            <span>(-) INSS</span> {converteNumeroParaMoeda(inss)}
                        </CardSegment>
                        
                    </>
                )
            }
        </FolhaCardBody>
    )

}

export default FolhaCard;