import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import { useEffect } from "react";
import { FolhaCardBody } from "./folha-card.styles";
import { CardSegment } from "../card/card.styles";

const FolhaCard = ({ ...props }) => {
    const {
        inssClt,
        fgts,
        irrfClt,
        titulo,
        salario,
        salarioLiquido,
        valeAlimentacao,
        valeTransporte,
        planoSaude,
        beneficios,
        decTerceiroProp,
        remuneracaoLiq,
        das,
        inss,
        irrf,
        patronal,
        feriasProp,
        totalBeneficios,
        faturamento,
        fgtsFerias,
        fgtsDecimo,
        aliquotaEfetiva,
        aliquotaFinal,
        valor
    } = props.dados;

    const TITULOS = {
        anexoIII: `Simples Nacional \n Anexo III`,
        anexoIV: "Anexo IV",
        anexoV: "Anexo V",
        anexoVR: "Anexo V Fator R",
        LP: "Lucro Presumido",
        autonomo: "Autonômo",
    };

    const { scroll, setScroll, detalhar } = useContext(CalculoContext);

    const key = props.key;
    const calculaPjLiquido = (
        faturamento,
        das,
        inss,
        irrf,
        patronal
    ) => {
        const liquido =
            faturamento - das - inss - irrf - patronal;

        return liquido;
    };

    function converteNumeroParaMoeda(number) {
        return Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        }).format(number);
    }

    function converteParaPorcentagem(number) {
        return Intl.NumberFormat("pt-Br", {
            style: "percent",
            minimumFractionDigits: 2,
        }).format(number);
    }

    useEffect(() => {
        setScroll(false);
    });

    return (
        <FolhaCardBody key={key}>
            {titulo === "folha" ? (
                <>
                    <CardSegment
                        style={{ display: "block" }}
                        bgColor={"#78ce1980"}
                        padding={"0.5rem"}
                        textAlign={"center"}
                        fontWeight={"600"}
                        //bdRadius={"0.3rem"}
                        whiteSpace={"pre-line"}
                    >
                        <span>CLT</span>
                    </CardSegment>
                    <CardSegment>
                        <span>Salário</span> {converteNumeroParaMoeda(salario)}
                    </CardSegment>
                    <CardSegment color={"#ac0202"}>
                        <span>(-) INSS</span> {converteNumeroParaMoeda(inssClt)}
                    </CardSegment>
                    <CardSegment color={"#ac0202"}>
                        <span>(-) IRRF</span> {converteNumeroParaMoeda(irrfClt)}
                    </CardSegment>
                    <CardSegment bgColor={"#ced4da66"} margin={'0 0 0.5rem'}
                        
                    >
                        <span>Salario Liquido</span>{" "}
                        {converteNumeroParaMoeda(salarioLiquido)}
                    </CardSegment>
                    <CardSegment>
                        <span>FGTS Mensal</span> {converteNumeroParaMoeda(fgts)}
                    </CardSegment>
                    <CardSegment>
                        <span>13º Proporcional</span>{" "}
                        {converteNumeroParaMoeda(decTerceiroProp)}
                    </CardSegment>
                    <CardSegment>
                        <span>Férias Proporcional</span>{" "}
                        {converteNumeroParaMoeda(feriasProp)}
                    </CardSegment>
                    {detalhar ? (
                        <>
                            <CardSegment>
                                <span>FGTS Férias</span>
                                {converteNumeroParaMoeda(fgtsFerias)}
                            </CardSegment>
                            <CardSegment>
                                <span>FGTS 13º</span>
                                {converteNumeroParaMoeda(fgtsDecimo)}
                            </CardSegment>
                            <CardSegment>
                                <span>Plano de Saúde</span>
                                {converteNumeroParaMoeda(planoSaude)}
                            </CardSegment>
                            <CardSegment>
                                <span>VR / VA</span>
                                {converteNumeroParaMoeda(valeAlimentacao)}
                            </CardSegment>
                            <CardSegment>
                                <span>VT</span>
                                {converteNumeroParaMoeda(valeTransporte)}
                            </CardSegment>
                            <CardSegment>
                                <span>Outros benefícios</span>
                                {converteNumeroParaMoeda(beneficios)}
                            </CardSegment>
                        </>
                    ) : (
                        <CardSegment>
                            <span>Benefícios</span>{" "}
                            {converteNumeroParaMoeda(totalBeneficios)}
                        </CardSegment>
                    )}

                    <CardSegment
                        style={{
                            backgroundColor: "#78ce1980",
                            marginTop: "auto",
                        }}
                    >
                        <span>Remuneração final</span>{" "}
                        {converteNumeroParaMoeda(remuneracaoLiq)}
                    </CardSegment>
                </>
            ) : (
                <>
                    <CardSegment
                        style={{ display: "block" }}
                        bgColor={"#78ce1980"}
                        padding={"0.5rem"}
                        textAlign={"center"}
                        fontWeight={"600"}
                        //bdRadius={"0.3rem"}
                        whiteSpace={"pre-line"}
                    >
                        <span>PJ</span>
                    </CardSegment>
                    {detalhar ? (
                        <>
                            <CardSegment
                                style={{ display: "block" }}
                                bgColor={"#78ce1980"}
                                padding={"0.5rem"}
                                textAlign={"center"}
                                //fontWeight={"600"}
                                //bdRadius={"0.3rem"}
                                whiteSpace={"pre-line"}
                            >
                                <span>{TITULOS[titulo]}</span>
                            </CardSegment>
                            <CardSegment bgColor={"#ced4da66"} margin={'0 0 0.25rem'}>
                                <span>Impostos sobre faturamento</span>
                            </CardSegment>
                            <CardSegment>
                                <span>Alíquota</span>
                                {converteParaPorcentagem(aliquotaEfetiva)}
                            </CardSegment>
                            <CardSegment color={"#ac0202"}>
                                <span>(-) DAS</span>
                                {converteNumeroParaMoeda(das)}
                            </CardSegment>
                            <CardSegment bgColor={"#ced4da66"} margin={'0.25rem 0 0.25rem'}>
                                <span>Prolabore</span>
                                {converteNumeroParaMoeda(valor)}
                            </CardSegment>
                            <CardSegment color={"#ac0202"}>
                                <span>(-) INSS</span>
                                {converteNumeroParaMoeda(inss)}
                            </CardSegment>
                            <CardSegment color={"#ac0202"}>
                                <span>(-) IRRF</span>
                                {converteNumeroParaMoeda(irrf)}
                            </CardSegment>
                            <CardSegment bgColor={"#ced4da66"} margin={'0.25rem 0 0.25rem'}>
                                <span>Alíquota Final</span>
                                {converteParaPorcentagem(aliquotaFinal)}
                            </CardSegment>
                            <CardSegment
                                bgColor={"#78ce1980"}
                                margin={'auto 0 0'}
                                //bdRadius={'0.3rem'}
                                padding={'0.5rem'}
                            >
                                <span>Remuneração Final</span>
                                {converteNumeroParaMoeda(calculaPjLiquido(
                                        faturamento,
                                        das,
                                        inss,
                                        irrf,
                                        patronal
                                    ))}
                            </CardSegment>
                        </>
                    ) : (
                        <>
                            <CardSegment>
                                <span>Salario bruto</span>{" "}
                                {converteNumeroParaMoeda(faturamento)}
                            </CardSegment>
                            <CardSegment color={"#ac0202"}>
                                <span>(-) DAS</span>{" "}
                                {converteNumeroParaMoeda(das)}
                            </CardSegment>
                            <CardSegment color={"#ac0202"}>
                                <span>(-) INSS</span>{" "}
                                {converteNumeroParaMoeda(inss)}
                            </CardSegment>
                            {irrf ? (
                                <CardSegment color={"#ac0202"}>
                                    <span>(-) IRRF</span>{" "}
                                    {converteNumeroParaMoeda(irrf)}
                                </CardSegment>
                            ) : (
                                <></>
                            )}
                            {patronal ? (
                                <CardSegment color={"#ac0202"}>
                                    <span>(-) Patronal</span>{" "}
                                    {converteNumeroParaMoeda(patronal)}
                                </CardSegment>
                            ) : (
                                <></>
                            )}
                            <CardSegment
                                bgColor={"#78ce1980"}
                                margin={'auto 0 0'}
                                //bdRadius={'0.3rem'}
                                padding={'0.5rem'}
                            >
                                <span>Remuneração líquida</span>{" "}
                                {converteNumeroParaMoeda(
                                    calculaPjLiquido(
                                        faturamento,
                                        das,
                                        inss,
                                        irrf,
                                        patronal
                                    )
                                )}
                            </CardSegment>
                        </>
                    )}
                </>
            )}
        </FolhaCardBody>
    );
};

export default FolhaCard;
