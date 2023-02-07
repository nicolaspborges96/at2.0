import { ReactComponent as LogoHorizontal } from '../../assets/logo-horizontal.svg';
import { FolhaContainer, FormFolha } from './folha.styles';
import { ContainerHeaderAnaliseT, ContainerLogo, StyledSpan } from '../analise-tributaria/analise-tributaria.styles';
import FormInput from '../../components/form-input/form-input.component';
import { SearchInput, SelectInput } from '../../components/form-input/form-input.styles';
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

const Folha = () => {


    return (
        <FolhaContainer>
            <ContainerHeaderAnaliseT>
                <ContainerLogo>
                    <LogoHorizontal />
                </ContainerLogo>
                <StyledSpan color='#000000' fontSize='1.3rem' fontWeight='600' margin={'auto 0'} >CLT x PJ</StyledSpan>
            </ContainerHeaderAnaliseT>

            <FormFolha >
                <FormInput label={'Salário mensal (bruto):'} />
                <label>
                    Regime:
                <SelectInput >
                    <option value={'CLT'}>CLT</option>
                    <option value={'PJ'}>PJ</option>
                </SelectInput>
                </label>
                <FormInput label={'Plano de saúde:'} />
                <FormInput label={'Vale-refeição/alimentação:'} />
                <FormInput label={'Vale-transporte:'} />
                <FormInput label={'Outros benefícios:'} />
                <label>
                    Selecione sua atividade:
                <SelectInput >
                    <option value={'TI'}>TI</option>
                    <option value={'Advogado'}>Advocacia</option>
                    <option value={'Medicina'}>Medicina</option>
                    <option value={'Marketing'}>Marketing</option>
                    <option value={'Engenharia'}>Engenharia</option>
                </SelectInput>
                </label>
            </FormFolha>

            <Button texto={'Calcular'} type='submit' buttonStyle={BUTTON_TYPE_CLASSES.svg} border={'1px solid #c3c8ced4'} 
            margin={'1.5rem auto 0'} bgColor={'#ffffff'} width={'200px'} hover={'border: 1px solid #a5c017; color:#396600'} />
        </FolhaContainer>

    )

}

export default Folha;