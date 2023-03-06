import { useEffect, useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";

import { BlocoResultado, CardSegment } from "../card/card.styles";
import { CardDetalhadoBody } from './card-detalhado.styles';

const TITULOS = {
    anexoIII: `Simples Nacional \n Anexo III`,
    anexoIV: 'Simples Nacional \n Anexo IV',
    anexoV: 'Simples Nacional \n Anexo V',
    anexoVR: 'Simples Nacional \n Anexo V Fator R',
    LP: 'Lucro Presumido',
    autonomo: 'Autonômo',
    anexoI: `Simples Nacional \n Anexo I \n Comércio`,
    anexoII: `Simples Nacional \n Anexo II \n Indústria`,
}

function converteNumeroParaMoeda(number) {
    return Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(number);
};

function converteParaPorcentagem(number) {
    return Intl.NumberFormat('pt-Br', { style: 'percent', minimumFractionDigits: 2 }).format(number);
}

const CardDetalhado = ({ ...props }) => {
    const key = props.key;
    const {
        titulo,
        das,
        faturamento,
        custoLP,
        valorLP,
        valor,
        inss,
        irrf,
        patronal,
        totalSN,
        aliquotaFinal,
        socios,
        aliquotaNominal,
        aliquotaEfetiva,
        cppDas,
        fgtsFatorR
    } = props.dados;

    const { pis, cofins, csll, irpj, adicionalIR, iss } = Object(custoLP);

    const {
        inssAut,
        irrfAut,
        cppAut,
        issAut,
        aliqFinAut,
        totalAut,
        pagoEmpregador,
    } = Object(props.dados);

    const { scroll, setScroll } = useContext(CalculoContext);

    const vencedor = props.vencedor;

    useEffect(() => {
        setScroll(false);
    });

    return (
        <CardDetalhadoBody key={key}>
            {console.log(props.dados)}
            {titulo !== "LP" && titulo !== "autonomo" ? (
                <>
                    {vencedor === titulo ? (
                        <CardSegment
                            bgColor={"#396600"}
                            color={"#a5c017"}
                            margin={"0 auto 0.3rem"}
                            bdRadius={"0.3rem"}
                            width={"95%"}
                            fontSize={"0.8rem"}
                            textAlign={"center"}
                        >
                            <span style={{ margin: "auto" }}>
                                Opção recomendada para o cliente
                            </span>
                        </CardSegment>
                    ) : (
                        <></>
                    )}
                    <CardSegment
                        style={{ display: "block" }}
                        bgColor={"#78ce1980"}
                        padding={"0.5rem"}
                        textAlign={"center"}
                        fontWeight={"600"}
                        bdRadius={"0.3rem"}
                        whiteSpace={"pre-line"}
                    >
                        {TITULOS[titulo]}
                    </CardSegment>
                    <CardSegment bgColor={"#ced4da66"} fontWeight={"500"}>
                        <span>Faturamento Mensal</span>{" "}
                        {converteNumeroParaMoeda(faturamento)}
                    </CardSegment>
                    <CardSegment>
                        <span>Alíquota Nominal</span>
                        {converteParaPorcentagem(aliquotaNominal)}
                    </CardSegment>
                    <CardSegment>
                        <span>Alíquota Efetiva</span>
                        {converteParaPorcentagem(aliquotaEfetiva)}
                    </CardSegment>
                    <CardSegment>
                        <span>Sócios</span> {socios}
                    </CardSegment>
                    {titulo === "anexoVR" ? (
                        <>
                            <CardSegment
                                bgColor={"#ced4da66"}
                                fontWeight={"500"}
                            >
                                <span>Cálculo Fator R</span>{" "}
                                {converteNumeroParaMoeda(faturamento * 0.28)}
                            </CardSegment>
                            <CardSegment color={"#ac0202"}>
                                <span>(-) CPP DAS</span>{" "}
                                {converteNumeroParaMoeda(cppDas)}
                            </CardSegment>
                            {fgtsFatorR ? (
                                <>
                                <CardSegment>
                                    <span></span>
                                </CardSegment>
                                <CardSegment color={"#ac0202"}>
                                    <span>(-) FGTS Funcionário</span>{" "}
                                    {converteNumeroParaMoeda(fgtsFatorR)}
                                </CardSegment>
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                    <CardSegment>
                        <span>Pró-labore por sócio</span>{" "}
                        {converteNumeroParaMoeda(valor)}
                    </CardSegment>
                    <CardSegment
                        margin={"1rem 0 0"}
                        bgColor={"#ced4da66"}
                        fontWeight={"500"}
                    >
                        <span>Resumo dos Impostos</span>
                    </CardSegment>
                    <CardSegment>
                        <span>DAS </span>
                        {converteNumeroParaMoeda(das)}
                    </CardSegment>
                    <CardSegment>
                        <span>INSS </span>
                        {converteNumeroParaMoeda(inss)}
                    </CardSegment>
                    {irrf === 0 ? (
                        <></>
                    ) : (
                        <CardSegment>
                            <span>IRRF </span>
                            {converteNumeroParaMoeda(irrf)}
                        </CardSegment>
                    )}
                    {patronal === 0 ? (
                        <></>
                    ) : (
                        <CardSegment>
                            <span>Patronal </span>
                            {converteNumeroParaMoeda(patronal)}
                        </CardSegment>
                    )}
                    <BlocoResultado margin={"auto 0 0 0"} bdRadius={"0.3rem"}>
                        <CardSegment bgColor={"#ced4da66"}>
                            <span>Total</span>
                            {converteNumeroParaMoeda(totalSN)}
                        </CardSegment>
                        <CardSegment bgColor={"#78ce1980"}>
                            <span>Alíquota Final </span>
                            {converteParaPorcentagem(aliquotaFinal)}
                        </CardSegment>
                    </BlocoResultado>
                </>
            ) : titulo === "autonomo" ? (
                <>
                    {vencedor === titulo ? (
                        <CardSegment
                            bgColor={"#396600"}
                            color={"#a5c017"}
                            margin={"0 auto 0.3rem"}
                            bdRadius={"0.3rem"}
                            width={"95%"}
                            fontSize={"0.8rem"}
                            textAlign={"center"}
                        >
                            <span style={{ margin: "auto" }}>
                                Opção recomendada para o cliente
                            </span>
                        </CardSegment>
                    ) : (
                        <></>
                    )}
                    <CardSegment
                        style={{ display: "block" }}
                        bgColor={"#78ce1980"}
                        padding={"0.5rem"}
                        textAlign={"center"}
                        fontWeight={"600"}
                        bdRadius={"0.3rem"}
                        whiteSpace={"pre-line"}
                    >
                        {TITULOS[titulo]}
                    </CardSegment>
                    <CardSegment bgColor={"#ced4da66"} fontWeight={"500"}>
                        <span>Salário Bruto</span>{" "}
                        {converteNumeroParaMoeda(faturamento)}
                    </CardSegment>

                    <CardSegment
                        margin={"1rem 0 0"}
                        bgColor={"#ced4da66"}
                        fontWeight={"500"}
                    >
                        <span>Resumo dos Impostos</span>
                    </CardSegment>
                    <CardSegment>
                        <span>INSS </span>
                        {converteNumeroParaMoeda(inssAut)}
                    </CardSegment>
                    <CardSegment>
                        <span>Patronal </span>
                        {converteNumeroParaMoeda(cppAut)}
                    </CardSegment>
                    {irrf === 0 ? (
                        <></>
                    ) : (
                        <CardSegment>
                            <span>IRRF </span>
                            {converteNumeroParaMoeda(irrfAut)}
                        </CardSegment>
                    )}
                    <CardSegment>
                        <span>ISS </span>
                        {converteNumeroParaMoeda(issAut)}
                    </CardSegment>
                    <CardSegment fontSize={"0.6rem"} margin={"0.6rem 0 0.6rem"}>
                        <span>{`A contribuição patronal não é paga diretamente pelo autonomo, e sim pelo empregador. Contudo, caso o autônomo 
                            receba ${converteNumeroParaMoeda(
                                faturamento
                            )} o empregador estará pagando de fato ${converteNumeroParaMoeda(
                            pagoEmpregador
                        )}.`}</span>
                    </CardSegment>

                    <BlocoResultado margin={"auto 0 0 0"} bdRadius={"0.3rem"}>
                        <CardSegment bgColor={"#ced4da66"}>
                            <span>Total </span>
                            {converteNumeroParaMoeda(totalAut)}
                        </CardSegment>
                        <CardSegment bgColor={"#78ce1980"}>
                            <span>Alíquota Final</span>
                            {converteParaPorcentagem(aliquotaFinal)}
                        </CardSegment>
                    </BlocoResultado>
                </>
            ) : (
                <>
                    {vencedor === titulo ? (
                        <CardSegment
                            bgColor={"#396600"}
                            color={"#a5c017"}
                            margin={"0 auto 0.3rem"}
                            bdRadius={"0.3rem"}
                            width={"95%"}
                            fontSize={"0.8rem"}
                            textAlign={"center"}
                        >
                            <span style={{ margin: "auto" }}>
                                Opção recomendada para o cliente
                            </span>
                        </CardSegment>
                    ) : (
                        <></>
                    )}
                    <CardSegment
                        style={{ display: "block" }}
                        bgColor={"#78ce1980"}
                        padding={"0.5rem"}
                        textAlign={"center"}
                        fontWeight={"600"}
                        bdRadius={"0.3rem"}
                        whiteSpace={"pre-line"}
                    >
                        {TITULOS[titulo]}
                    </CardSegment>
                    <CardSegment bgColor={"#ced4da66"} fontWeight={"500"}>
                        <span>Faturamento Mensal</span>{" "}
                        {converteNumeroParaMoeda(faturamento)}
                    </CardSegment>
                    <CardSegment>
                        <span>Pró-labore por sócio</span>{" "}
                        {converteNumeroParaMoeda(valor)}
                    </CardSegment>
                    <CardSegment
                        margin={"1rem 0 0"}
                        bgColor={"#ced4da66"}
                        fontWeight={"500"}
                    >
                        <span>Resumo dos Impostos</span>
                    </CardSegment>
                    <CardSegment fontSize={"0.8rem"}>
                        <span>PIS</span> {converteNumeroParaMoeda(pis)}
                    </CardSegment>
                    <CardSegment fontSize={"0.8rem"}>
                        <span>COFINS</span> {converteNumeroParaMoeda(cofins)}
                    </CardSegment>
                    <CardSegment fontSize={"0.8rem"}>
                        <span>IRPJ</span> {converteNumeroParaMoeda(irpj)}
                    </CardSegment>
                    <CardSegment fontSize={"0.8rem"}>
                        <span>CSLL</span> {converteNumeroParaMoeda(csll)}
                    </CardSegment>
                    <CardSegment fontSize={"0.8rem"}>
                        <span>ISS</span> {converteNumeroParaMoeda(iss)}
                    </CardSegment>
                    <CardSegment fontSize={"0.8rem"}>
                        <span>INSS</span> {converteNumeroParaMoeda(inss)}
                    </CardSegment>
                    <CardSegment fontSize={"0.8rem"}>
                        <span>Patronal</span>{" "}
                        {converteNumeroParaMoeda(patronal)}
                    </CardSegment>

                    {adicionalIR ? (
                        <CardSegment fontSize={"0.8rem"}>
                            <span>Adicional IRPJ</span>{" "}
                            {converteNumeroParaMoeda(adicionalIR)}
                        </CardSegment>
                    ) : (
                        <></>
                    )}
                    <BlocoResultado margin={"auto 0 0 0"} bdRadius={"0.3rem"}>
                        <CardSegment bgColor={"#ced4da66"}>
                            <span>Total </span>
                            {converteNumeroParaMoeda(valorLP)}
                        </CardSegment>
                        <CardSegment bgColor={"#78ce1980"}>
                            <span>Alíquota Final</span>
                            {converteParaPorcentagem(aliquotaFinal)}
                        </CardSegment>
                    </BlocoResultado>
                </>
            )}
        </CardDetalhadoBody>
    );

}

export default CardDetalhado;