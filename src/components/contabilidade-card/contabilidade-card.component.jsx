import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import { CardSegment } from "../card/card.styles";
import {
    ContainerContCardBloco,
    ContCardBloco,
    ContCardBody,
} from "./contabilidade.card.styles";

const ContabilidadeCard = () => {
    const { comparacaoCont } = useContext(CalculoContext);
    const {
        faturamento,
        valor,
        irrf,
        inss,
        valorProLaboreDois,
        irrfDois,
        inssDois,
    } = comparacaoCont;

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
                    <CardSegment>
                        <span>Fator R outra contabilidade</span>
                    </CardSegment>
                    <CardSegment>
                        <span>Prolabore:</span>
                        {converteNumeroParaMoeda(valorProLaboreDois)}
                    </CardSegment>
                    <CardSegment>
                        <span>Inss</span>
                        {converteNumeroParaMoeda(inssDois)}
                    </CardSegment>
                    <CardSegment>
                        <span>IRRF</span>
                        {converteNumeroParaMoeda(irrfDois)}
                    </CardSegment>
                    <CardSegment>
                        <span>Total</span>
                        {converteNumeroParaMoeda(inssDois + irrfDois)}
                    </CardSegment>
                </ContCardBloco>
                <ContCardBloco>
                    <span>Fator R ContaJá</span>
                    <CardSegment>
                        <span>Prolabore:</span>
                        {converteNumeroParaMoeda(valor)}
                    </CardSegment>
                    <CardSegment>
                        <span>Inss</span>
                        {converteNumeroParaMoeda(inss)}
                    </CardSegment>
                    <CardSegment>
                        <span>IRRF</span>
                        {converteNumeroParaMoeda(irrf)}
                    </CardSegment>
                    <CardSegment>
                        <span>Total</span>
                        {converteNumeroParaMoeda(inss + irrf)}
                    </CardSegment>
                </ContCardBloco>
            </ContainerContCardBloco>
            <span> Economia com a ContaJá</span>
            {converteNumeroParaMoeda(inssDois + irrfDois - (inss + irrf))}
        </ContCardBody>
    );
};

export default ContabilidadeCard;
