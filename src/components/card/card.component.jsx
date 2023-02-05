import { a } from "@react-spring/web";

import { CardBody, CardSegment } from "./card.styles";


const TITULOS = {
    anexoIII: 'Simples Nacional - Anexo III',
    anexoIV: 'Simples Nacional - Anexo IV',
    anexoV: 'Simples Nacional - Anexo V',
    LP: 'Lucro Presumido'
}

function converteNumeroParaMoeda(number) {
    return Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(number);
};

function converteParaPorcentagem(number) {
    return Intl.NumberFormat('pt-Br', { style: 'percent', minimumFractionDigits: 2 }).format(number);
}

const Card = ({ ...props }) => {

    const { titulo, das, aliquotaEfetiva, faixa, faturamento } = props.dados;

    return (
        <CardBody >
            {
                titulo !== 'LP' ? (
                <>
                    <CardSegment bgColor={'#78ce1980'} padding={'0.5rem'} textAlign={'center'} fontWeight={'600'} bdRadius={'0.3rem'} >{TITULOS[titulo]}</CardSegment>
                    <CardSegment bgColor={'#ced4da66'} fontWeight={'500'} >
                        <span>Faturamento Mensal</span> {converteNumeroParaMoeda(faturamento)}
                    </CardSegment>
                    <CardSegment>
                        <span>Pró-labore por sócio</span>
                    </CardSegment>
                    <CardSegment bgColor={'#ced4da66'} fontWeight={'500'}>
                        <span>Resumo dos Impostos</span>
                    </CardSegment>
                    <span>DAS {converteNumeroParaMoeda(das)}</span>
                    <span>Alíquota Efetiva {converteParaPorcentagem(aliquotaEfetiva)}</span>
                    
                </>
                ) : (
                    <>
                    
                    </>
                )
            }

        </CardBody>
    )

}

export default Card;
