import { ReactComponent as LogoHorizontal } from '../../assets/logo-horizontal.svg';
import { FolhaContainer, FolhaContainerBody, FormFolha } from './folha.styles';
import { ContainerHeaderAnaliseT, ContainerLogo, StyledSpan } from '../analise-tributaria/analise-tributaria.styles';
import FormInput from '../../components/form-input/form-input.component';
import { SearchInput, SelectInput } from '../../components/form-input/form-input.styles';
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { useState, useContext } from 'react';
import { CalculoContext } from '../../context/calculo.context';
import FolhaForm from '../../components/folha-form/folha-form.component';
import FolhaDisplay from '../../components/folha-display/folha-display.component';


const Folha = () => {


    return (
        <FolhaContainer>
            <ContainerHeaderAnaliseT>
                <ContainerLogo>
                    <LogoHorizontal />
                </ContainerLogo>
                <StyledSpan color='#000000' fontSize='1.3rem' fontWeight='600' margin={'auto 0'} >CLT x PJ</StyledSpan>
            </ContainerHeaderAnaliseT>

            <FolhaForm />

            <FolhaDisplay />

        </FolhaContainer>
    )
}

export default Folha;