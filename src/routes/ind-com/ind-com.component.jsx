import { IndComContainer } from "./ind-com.styles";
import { ContainerHeaderAnaliseT, ContainerLogo, StyledSpan } from '../analise-tributaria/analise-tributaria.styles';
import { ReactComponent as LogoHorizontal } from '../../assets/logo-horizontal.svg';
import IcForm from "../../components/ic-form/ic-form.component";
import CardDisplay from "../../components/card-display/card-display.component";
import TextContainer from "../../components/text-container/text-container.component";
import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";

const IndCom = () => {
    const { isCardShown } = useContext(CalculoContext);

    return (
        <IndComContainer>
            <ContainerHeaderAnaliseT>
                <ContainerLogo>
                    <LogoHorizontal />
                </ContainerLogo>
                <StyledSpan
                    color="#000000"
                    fontSize="1.3rem"
                    fontWeight="600"
                    margin={"auto 0"}
                >
                    Indústria & Comércio
                </StyledSpan>
            </ContainerHeaderAnaliseT>

            <IcForm />
            <CardDisplay />
            {isCardShown ? (
                <TextContainer
                    texto={
                        "Essas atividades também estão sujeitas a substituição e antecipação tributária, o que pode levar à uma variação da alíquota calculada."
                    }
                    margin={'1rem auto'}
                    textAlign={'center'}
                />
            ) : (
                <></>
            )}
        </IndComContainer>
    );
};

export default IndCom;
