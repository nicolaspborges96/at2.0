import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import { CardSegment } from "../card/card.styles";
import {
    ContainerContCardBloco,
    ContCardBloco,
    ContCardBody,
} from "./contabilidade.card.styles";

const ContabilidadeCard = () => {
    const { dadosComparacaoContabilidades } = useContext(CalculoContext);
    const {
        faturamento,
        valor,
        irrf,
        inss,
        valorProLaboreDois,
        irrfDois,
        inssDois,
    } = dadosComparacaoContabilidades;

    const totalOutraCont = inssDois + irrfDois;
    const totalContaJa = inss + irrf;

    function converteNumeroParaMoeda(number) {
        return Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        }).format(number);
    }

    return (
        <ContCardBody className="asdasdasd">
            <ContainerContCardBloco>
                <ContCardBloco>
                    <CardSegment
                        style={{ display: "block" }}
                        bgColor={"#ced4da66"}
                        padding={"0.5rem"}
                        textAlign={"center"}
                        fontWeight={"600"}
                        bdRadius={"0.3rem"}
                        whiteSpace={"pre-line"}
                    >
                        <span>Fator R outra contabilidade</span>
                    </CardSegment>
                    <CardSegment>
                        <span>Pró-labore:</span>
                        {converteNumeroParaMoeda(valorProLaboreDois)}
                    </CardSegment>
                    <CardSegment>
                        <span>INSS</span>
                        {converteNumeroParaMoeda(inssDois)}
                    </CardSegment>
                    <CardSegment>
                        <span>IRRF</span>
                        {converteNumeroParaMoeda(irrfDois)}
                    </CardSegment>
                    <CardSegment>
                        <span>Total</span>
                        {converteNumeroParaMoeda(totalOutraCont)}
                    </CardSegment>
                </ContCardBloco>
                <ContCardBloco>
                    <CardSegment
                        style={{ display: "block" }}
                        bgColor={"#78ce1980"}
                        padding={"0.5rem"}
                        textAlign={"center"}
                        fontWeight={"600"}
                        bdRadius={"0.3rem"}
                        whiteSpace={"pre-line"}
                    >
                        <span>Fator R ContaJá</span>
                    </CardSegment>

                    <CardSegment>
                        <span>Pró-labore:</span>
                        {converteNumeroParaMoeda(valor)}
                    </CardSegment>
                    <CardSegment>
                        <span>INSS</span>
                        {converteNumeroParaMoeda(inss)}
                    </CardSegment>
                    <CardSegment>
                        <span>IRRF</span>
                        {converteNumeroParaMoeda(irrf)}
                    </CardSegment>
                    <CardSegment>
                        <span>Total</span>
                        {converteNumeroParaMoeda(totalContaJa)}
                    </CardSegment>
                </ContCardBloco>
            </ContainerContCardBloco>
            <div style={{display: 'flex', flexDirection: 'column', margin: '0 0.2rem 0.5rem 0.2rem'}} >
            <CardSegment
                bgColor={"#396600"}
                color={"#a5c017"}
                margin={"0 auto 0.3rem"}
                bdRadius={"0.3rem"}
                width={"97%"}
                fontSize={"0.9rem"}
                textAlign={"center"}
                fontWeight={"600"}
                style={{justifyContent: 'flex-start'}}
            >
                <span style={{margin: '0 0 0 0.8rem'}} > Economia com a ContaJá </span>
            </CardSegment>
            <CardSegment
                style={{ display: "flex", justifyContent: 'space-between', padding: '0 0.2rem 0 0.2rem' }}
                bgColor={"#78ce1980"}
                textAlign={"center"}
                fontWeight={"600"}
                bdRadiusTopLeft={'0.3rem'}
                bdRadiusTopRight={'0.3rem'}
                whiteSpace={"pre-line"}
                margin={"0 auto "}
                width={"97%"}
            >
                <span style={{margin: '0 0 0 0.8rem'}} > Mensal</span>
                <span style={{margin: '0 0.8rem 0 0'}} >
                {converteNumeroParaMoeda(totalOutraCont - totalContaJa)}
                </span>
                
            </CardSegment>
            <CardSegment
                style={{ display: "flex", justifyContent: 'space-between', padding: '0 0.2rem 0 0.2rem' }}
                bgColor={"#78ce1980"}
                textAlign={"center"}
                fontWeight={"600"}
                bdRadiusBotLeft={'0.3rem'}
                bdRadiusBotRight={'0.3rem'}
                whiteSpace={"pre-line"}
                margin={"0 auto "}
                width={"97%"}
            >
                <span style={{margin: '0 0 0 0.8rem'}} > Anual</span>
                <span style={{margin: '0 0.8rem 0 0'}} >
                {converteNumeroParaMoeda((totalOutraCont - totalContaJa)*12)}
                </span>
                
            </CardSegment>
            </div>
            
        </ContCardBody>
    );
};

export default ContabilidadeCard;
