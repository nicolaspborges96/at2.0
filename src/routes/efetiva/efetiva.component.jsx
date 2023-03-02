import { EfetivaContainer } from "./efetiva.styles";
import { ContainerHeaderAnaliseT, ContainerLogo, StyledSpan } from '../analise-tributaria/analise-tributaria.styles';
import { ReactComponent as LogoHorizontal } from '../../assets/logo-horizontal.svg';
import EfetivaForm from "../../components/efetiva-form/efetiva-form.component";
import EfetivaDisplay from "../../components/efetiva-display/efetiva-display.component";


const Efetiva = () => {

    return (
    <EfetivaContainer>
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
                    Alíquota Efetiva
                </StyledSpan>
            </ContainerHeaderAnaliseT>
            <EfetivaForm />
            <EfetivaDisplay />
        </EfetivaContainer>
    )
}

export default Efetiva;