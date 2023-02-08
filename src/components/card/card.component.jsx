import { useEffect, useContext } from "react";
import { CaculoContext } from "../../context/calculo.context";

import { BlocoResultado, CardBody, CardSegment } from "./card.styles";


const TITULOS = {
    anexoIII: `Simples Nacional \n Anexo III`,
    anexoIV: 'Simples Nacional \n Anexo IV',
    anexoV: 'Simples Nacional \n Anexo V',
    anexoVR: 'Simples Nacional \n Anexo V Fator R',
    LP: 'Lucro Presumido',
    autonomo: 'Autonômo'
}

function converteNumeroParaMoeda(number) {
    return Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(number);
};

function converteParaPorcentagem(number) {
    return Intl.NumberFormat('pt-Br', { style: 'percent', minimumFractionDigits: 2 }).format(number);
}

const Card = ({ ...props }) => {

    const { titulo, das, aliquotaEfetiva, faixa, faturamento, proLabore, custoLP, totalAliqLP, valorLP } = props.dados;
    const { valor, inss, irrf, patronal } = proLabore;
    const totalSN = das + inss + irrf + patronal;
    const aliquotaFinalSN = totalSN / faturamento;

    const { pis, cofins, csll, irpj, adicionalIR, iss } = Object(custoLP);

    const { inssAut, irrfAut, cppAut, issAut, aliqFinAut, totalAut, pagoEmpregador} = Object(props.dados);

    const { scroll, setScroll } = useContext(CaculoContext);



    useEffect(() => {
        setScroll(false);
    })


    return (
        <CardBody  >
            
            {
                (titulo !== 'LP' && titulo !== 'autonomo') ? (
                    <>
                        <CardSegment bgColor={'#78ce1980'} padding={'0.5rem'} textAlign={'center'} fontWeight={'600'} bdRadius={'0.3rem'} whiteSpace={'pre-line'} >{TITULOS[titulo]}</CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'} bgColor={'#ced4da66'} fontWeight={'500'} >
                            <span>Faturamento Mensal</span> {converteNumeroParaMoeda(faturamento)}
                        </CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'} >
                            <span>Pró-labore por sócio</span> {converteNumeroParaMoeda(valor)}
                        </CardSegment>
                        <CardSegment margin={'1rem 0 0'} display={'flex'} justifyContent={'space-between'} bgColor={'#ced4da66'} fontWeight={'500'}>
                            <span>Resumo dos Impostos</span>
                        </CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'}>
                            <span>DAS </span>{converteNumeroParaMoeda(das)}
                        </CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'}>
                            <span>INSS </span>{converteNumeroParaMoeda(inss)}
                        </CardSegment>
                        {
                            irrf === 0 ? (
                                <></>
                            ) : (
                                <CardSegment display={'flex'} justifyContent={'space-between'}>
                                    <span>IRRF </span>{converteNumeroParaMoeda(irrf)}
                                </CardSegment>
                            )

                        }
                        {
                            patronal === 0 ? (
                                <></>
                            ) : (
                                <CardSegment display={'flex'} justifyContent={'space-between'}>
                                    <span>Patronal </span>{converteNumeroParaMoeda(patronal)}
                                </CardSegment>
                            )
                        }
                        <BlocoResultado margin={'auto 0 0 0'} bdRadius={'0.3rem'}  >
                            <CardSegment display={'flex'} justifyContent={'space-between'} bgColor={'#ced4da66'}>
                                <span>Alíquota Final</span>{converteParaPorcentagem(aliquotaFinalSN)}
                            </CardSegment>
                            <CardSegment display={'flex'} bgColor={'#78ce1980'} justifyContent={'space-between'}>
                                <span>Total </span>{converteNumeroParaMoeda(totalSN)}
                            </CardSegment>
                        </BlocoResultado>
                    </>
                ) : (titulo === "autonomo" ? (
                    <>
                        <CardSegment bgColor={'#78ce1980'} padding={'0.5rem'} textAlign={'center'} fontWeight={'600'} bdRadius={'0.3rem'} whiteSpace={'pre-line'} >{TITULOS[titulo]}</CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'} bgColor={'#ced4da66'} fontWeight={'500'} >
                            <span>Salário Bruto</span> {converteNumeroParaMoeda(faturamento)}
                        </CardSegment>
                        
                        <CardSegment margin={'1rem 0 0'} display={'flex'} justifyContent={'space-between'} bgColor={'#ced4da66'} fontWeight={'500'}>
                            <span>Resumo dos Impostos</span>
                        </CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'}>
                            <span>INSS </span>{converteNumeroParaMoeda(inssAut)}
                        </CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'}>
                            <span>Patronal </span>{converteNumeroParaMoeda(cppAut)}
                        </CardSegment>
                        {
                            irrf === 0 ? (
                                <></>
                            ) : (
                                <CardSegment display={'flex'} justifyContent={'space-between'}>
                                    <span>IRRF </span>{converteNumeroParaMoeda(irrfAut)}
                                </CardSegment>
                            )

                        }
                        <CardSegment display={'flex'} justifyContent={'space-between'}>
                            <span>ISS </span>{converteNumeroParaMoeda(issAut)}
                        </CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'} fontSize={'0.6rem'} margin={'0.6rem 0 0.6rem'}>
                            <span>{`A contribuição patronal não é paga diretamente pelo autonomo, e sim pelo empregador. Contudo, caso o autônomo 
                            receba ${converteNumeroParaMoeda(faturamento)} o empregador estará pagando de fato ${converteNumeroParaMoeda(pagoEmpregador)}.`}</span>
                        </CardSegment>
                            
                        <BlocoResultado margin={'auto 0 0 0'} bdRadius={'0.3rem'}  >
                            <CardSegment display={'flex'} justifyContent={'space-between'} bgColor={'#ced4da66'}>
                                <span>Alíquota Final</span>{converteParaPorcentagem(aliqFinAut)}
                            </CardSegment>
                            <CardSegment display={'flex'} bgColor={'#78ce1980'} justifyContent={'space-between'}>
                                <span>Total </span>{converteNumeroParaMoeda(totalAut)}
                            </CardSegment>
                        </BlocoResultado>
                    </>
                ) : (

                    <>
                        <CardSegment bgColor={'#78ce1980'} padding={'0.5rem'} textAlign={'center'} fontWeight={'600'} bdRadius={'0.3rem'} 
                            whiteSpace={'pre-line'} >{TITULOS[titulo]}</CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'} bgColor={'#ced4da66'} fontWeight={'500'} >
                            <span>Faturamento Mensal</span> {converteNumeroParaMoeda(faturamento)}
                        </CardSegment>
                        <CardSegment display={'flex'} justifyContent={'space-between'} >
                            <span>Pró-labore por sócio</span> {converteNumeroParaMoeda(valor)}
                        </CardSegment>
                        <CardSegment margin={'1rem 0 0'} display={'flex'} justifyContent={'space-between'} bgColor={'#ced4da66'} fontWeight={'500'}>
                            <span>Resumo dos Impostos</span>
                        </CardSegment>
                        <CardSegment display={'flex'} fontSize={'0.8rem'} justifyContent={'space-between'} >
                            <span>PIS</span> {converteNumeroParaMoeda(pis)}
                        </CardSegment>
                        <CardSegment display={'flex'} fontSize={'0.8rem'} justifyContent={'space-between'} >
                            <span>COFINS</span> {converteNumeroParaMoeda(cofins)}
                        </CardSegment>
                        <CardSegment display={'flex'} fontSize={'0.8rem'} justifyContent={'space-between'} >
                            <span>IRPJ</span> {converteNumeroParaMoeda(irpj)}
                        </CardSegment>
                        <CardSegment display={'flex'} fontSize={'0.8rem'} justifyContent={'space-between'} >
                            <span>CSLL</span> {converteNumeroParaMoeda(csll)}
                        </CardSegment>
                        <CardSegment display={'flex'} fontSize={'0.8rem'} justifyContent={'space-between'} >
                            <span>ISS</span> {converteNumeroParaMoeda(iss)}
                        </CardSegment>
                        <CardSegment display={'flex'} fontSize={'0.8rem'} justifyContent={'space-between'} >
                            <span>INSS</span> {converteNumeroParaMoeda(inss)}
                        </CardSegment>
                        <CardSegment display={'flex'} fontSize={'0.8rem'} justifyContent={'space-between'} >
                            <span>Patronal</span> {converteNumeroParaMoeda(patronal)}
                        </CardSegment>

                        {adicionalIR ? (
                            <CardSegment display={'flex'} fontSize={'0.8rem'} justifyContent={'space-between'} >
                                <span>Adicional IRPJ</span> {converteNumeroParaMoeda(adicionalIR)}
                            </CardSegment>
                        ) : (
                            <></>
                        )
                        }
                        <BlocoResultado margin={'auto 0 0 0'} bdRadius={'0.3rem'}  >
                            <CardSegment display={'flex'} justifyContent={'space-between'} bgColor={'#ced4da66'}>
                                <span>Alíquota Final</span>{converteParaPorcentagem(totalAliqLP)}
                            </CardSegment>
                            <CardSegment display={'flex'} bgColor={'#78ce1980'} justifyContent={'space-between'}>
                                <span>Total </span>{converteNumeroParaMoeda(valorLP)}
                            </CardSegment>
                        </BlocoResultado>
                    </>
                ))
            }

        </CardBody>
    )

}

export default Card;
