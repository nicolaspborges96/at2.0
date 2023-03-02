import { IndComContainer } from "./ind-com.styles";
import { ContainerHeaderAnaliseT, ContainerLogo, StyledSpan } from '../analise-tributaria/analise-tributaria.styles';
import { ReactComponent as LogoHorizontal } from '../../assets/logo-horizontal.svg';
import IcForm from "../../components/ic-form/ic-form.component";
import CardDisplay from "../../components/card-display/card-display.component";

const IndCom = () => {

    
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
            <span style={{margin:'auto'}} >Essas atividades também estão sujeitas a substituição e antecipação tributária, o que pode levar à uma variação
                da alíquota calculada.
            </span>
        </IndComContainer>
    );
};

export default IndCom;
