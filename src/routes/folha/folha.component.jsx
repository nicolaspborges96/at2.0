import { ReactComponent as LogoHorizontal } from '../../assets/logo-horizontal.svg';
import { FolhaContainer, FolhaContainerBody, FormFolha } from './folha.styles';
import { ContainerHeaderAnaliseT, ContainerLogo, StyledSpan } from '../analise-tributaria/analise-tributaria.styles';
import FolhaForm from '../../components/folha-form/folha-form.component';
import FolhaDisplay from '../../components/folha-display/folha-display.component';
import { useNavigate } from 'react-router-dom';

const Folha = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    return (
        <FolhaContainer>
            <ContainerHeaderAnaliseT>
                <ContainerLogo onClick={goToHome} >
                    <LogoHorizontal />
                </ContainerLogo>
                <StyledSpan
                    color="#000000"
                    fontSize="1.3rem"
                    fontWeight="600"
                    margin={"auto 0"}
                >
                    CLT x PJ
                </StyledSpan>
            </ContainerHeaderAnaliseT>

            <FolhaForm />

            <FolhaDisplay />
        </FolhaContainer>
    );
};

export default Folha;