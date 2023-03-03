import { CardSegment } from "../card/card.styles";
import { EfetivaCardBody } from "./efetiva-card.styles";
import { useEffect, useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";

const TITULOS = {
    anexoIII: `Simples Nacional \n Anexo III`,
    anexoIV: "Simples Nacional \n Anexo IV",
    anexoV: "Simples Nacional \n Anexo V",
    anexoVR: "Simples Nacional \n Anexo V Fator R",
    LP: "Lucro Presumido",
    autonomo: "Autonômo",
    anexoI: `Simples Nacional \n Anexo I \n Comércio`,
    anexoII: `Simples Nacional \n Anexo II \n Indústria`,
};



const EfetivaCard = ({ ...props }) => {
    const { titulo, faixa, aliquotaEfetiva } = props.dados;
    const key = props.key;
    const { scroll, setScroll } = useContext(CalculoContext);

    const faturamentoMes  = props.faturamentoMes;

    function converteNumeroParaMoeda(number) {
        return Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(number);
    };
    
    function converteParaPorcentagem(number) {
        return Intl.NumberFormat('pt-Br', { style: 'percent', minimumFractionDigits: 2 }).format(number);
    };

    useEffect(() => {
        setScroll(false);
    });
    
    const dasMes = Number(faturamentoMes)*Number(aliquotaEfetiva);

    return (
        <EfetivaCardBody key={key} >
            
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
            <CardSegment  fontWeight={"500"} style={{ display: "block" }}>
                <span>{faixa}</span>
            </CardSegment>
            <CardSegment  fontWeight={"500"} >
                <span>DAS</span> {converteNumeroParaMoeda(dasMes)}
                
            </CardSegment>
            <CardSegment bgColor={"#78ce1980"} fontWeight={"500"} >
                <span>Alíquota Efetiva</span>
                {converteParaPorcentagem(aliquotaEfetiva)}
            </CardSegment>
        </EfetivaCardBody>
    );
};

export default EfetivaCard;
