import { CardSegment } from "../card/card.styles";
import { FolhaCardBody } from "../folha-card/folha-card.styles";

const CardProlabore = ({ ...props }) => {
    const {
        inssProLaboreAvulso,
        irrfProLaboreAvulso,
        patronalProLaboreAvulso,
        proLaboreAvulso,
    } = props.dados;

    const prolaboreLiquido = proLaboreAvulso - inssProLaboreAvulso - irrfProLaboreAvulso - patronalProLaboreAvulso;

    function converteNumeroParaMoeda(number) {
        return Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        }).format(number);
    }

    return (
        <FolhaCardBody>
            <CardSegment
                style={{ display: "block" }}
                bgColor={"#78ce1980"}
                padding={"0.5rem"}
                textAlign={"center"}
                fontWeight={"600"}
                //bdRadius={"0.3rem"}
                whiteSpace={"pre-line"}
            >
                <span>Pró-labore</span>
            </CardSegment>

            <CardSegment>
                <span>Valor</span>
                {converteNumeroParaMoeda(proLaboreAvulso)}
            </CardSegment>
            <CardSegment color={"#ac0202"} >
                <span>(-) INSS</span>
                {converteNumeroParaMoeda(inssProLaboreAvulso)}
            </CardSegment>
            {irrfProLaboreAvulso > 0 ? (
                <CardSegment color={"#ac0202"} >
                    <span>(-) IRRF</span>
                    {converteNumeroParaMoeda(irrfProLaboreAvulso)}
                </CardSegment>
            ) : (
                <></>
            )}
            {patronalProLaboreAvulso > 0 ? (
                <CardSegment color={"#ac0202"}>
                    <span>(-) Patronal</span>
                    {converteNumeroParaMoeda(patronalProLaboreAvulso)}
                </CardSegment>
            ) : (
                <></>
            )}
            <CardSegment
                bgColor={"#78ce1980"}
                margin={"auto 0 0"}
                //bdRadius={'0.3rem'}
                padding={"0.5rem"}
            >
                <span>Remuneração líquida</span>{" "}
                {converteNumeroParaMoeda(prolaboreLiquido)}
            </CardSegment>
        </FolhaCardBody>
    );
};

export default CardProlabore;
