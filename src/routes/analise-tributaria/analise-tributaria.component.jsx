import AnaliseTForm from '../../components/analise-tributaria-form/analise-tributaria-form.component';
import { AnaliseTContainer, ContainerHeaderAnaliseT, ContainerLogo, StyledSpan } from './analise-tributaria.styles';
import CardDisplay from '../../components/card-display/card-display.component';
import { ReactComponent as LogoHorizontal } from '../../assets/logo-horizontal.svg';
import { useContext, useEffect } from 'react';
import { CalculoContext } from '../../context/calculo.context';
import ContainerBtnDetalhar from '../../components/container-btn-detalhar/container-btn-detalhar.component';
import { useNavigate } from "react-router-dom";

const AnaliseT = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    return (
        <>
            <AnaliseTContainer >
                <ContainerHeaderAnaliseT>
                    <ContainerLogo onClick={goToHome} > 
                        <LogoHorizontal />
                    </ContainerLogo>
                    <StyledSpan color='#000000' fontSize='1.3rem' fontWeight='600' margin={'auto 0'} >Análise Tributária</StyledSpan>
                </ContainerHeaderAnaliseT>
                <AnaliseTForm  />
                <ContainerBtnDetalhar />
                <CardDisplay />
            </AnaliseTContainer>

            
        </>
        
    )
}

export default AnaliseT;
