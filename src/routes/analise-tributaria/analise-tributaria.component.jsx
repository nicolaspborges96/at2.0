import AnaliseTForm from '../../components/analise-tributaria-form/analise-tributaria-form.component';
import { AnaliseTContainer, ContainerHeaderAnaliseT, ContainerLogo, StyledSpan } from './analise-tributaria.styles';
import CardDisplay from '../../components/card-display/card-display.component';
import { ReactComponent as LogoHorizontal } from '../../assets/logo-horizontal.svg';


const AnaliseT = () => {
    

    return (
        <>
            <AnaliseTContainer>
                <ContainerHeaderAnaliseT>
                    <ContainerLogo>
                        <LogoHorizontal />
                    </ContainerLogo>
                    <StyledSpan color='#000000' fontSize='1.3rem' fontWeight='500' margin={'auto 0'} >Análise Tributária</StyledSpan>
                </ContainerHeaderAnaliseT>
                <AnaliseTForm  />
                <CardDisplay />
            </AnaliseTContainer>

            
        </>
        
    )
}

export default AnaliseT;
