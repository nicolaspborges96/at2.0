import { ReactComponent as LogoHorizontalSvg } from '../../assets/logo-horizontal.svg';
import FormInput from '../../components/form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from "../../components/button/button.component";
import { ConfigProvider, Radio, Slider } from 'antd';
import { useState } from 'react';
import { AnaliseTContainer, AnaliseTForm } from './analise-tributaria.styles';

const marks = {
    2: '2%',
    3: '3%',
    4: '4%',
    5: '5%',
    
}

/*const defaultFormFields = {
    faturamento: '',
    socios: '',
    funcionarios: 0,
    exterior: 0,
    fopag: 0,
    iss: 3

}*/

const AnaliseT = () => {
    //const [ formFields, setFormFields ] = useState(defaultFormFields);
    //const { faturamento, socios, funcionarios, exterior, fopag, iss } = formFields;
    
    const [funcionarios, setFuncionario] = useState(0);
    const [exterior, setExterior] = useState(0);
    

    const onChangeFuncionario = (e) => {
        console.log('radio checked', e.target.value);
        setFuncionario(e.target.value);
    }

    const onChangeExterior = (e) => {
        console.log('radio checked', e.target.value);
        setExterior(e.target.value);
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        const data = new FormData(ev.target);

        console.log(ev.target)
    }

    return (
        <AnaliseTContainer>
            <AnaliseTForm style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitForm}>
                <ConfigProvider theme={{token:{colorPrimary: '#396600', fontFamily: 'Poppins, sans-serif'}}} >
                <FormInput label={'Qual o faturamento médio da empresa?'} name='faturamento' />
                <FormInput label={'Quantos sócios tem a empresa?'} name='socios' />
                

                <span>A empresa tem funcionários?</span>
                
                <Radio.Group name='funcionarios' onChange={onChangeFuncionario} value={funcionarios} label={'A empresa tem funcionários?'}>
                    <Radio value={1}>Sim</Radio>
                    <Radio value={0}>Não</Radio>
                </Radio.Group>

                {
                    funcionarios ? (
                        <FormInput label={'Valor da folha de pagamento (bruto):'} name='fopag' />
                    ) : (
                        <></>
                    )
                }

                <span>A empresa presta serviço para o exterior?</span>
                <Radio.Group name='exterior' onChange={onChangeExterior} value={exterior} label={'A empresa tem funcionários?'}>
                    <Radio value={1}>Sim</Radio>
                    <Radio value={0}>Não</Radio>
                </Radio.Group>

                {
                    exterior ? (
                        <></>
                    ) : (
                        <Slider marks={marks} max={5} min={2} trackStyle={{backgroundColor:'#396600'}} defaultValue={3} />
                    )
                }
                </ConfigProvider>

                <Button texto={'Calcular'} type='submit' buttonStyle={BUTTON_TYPE_CLASSES.svg} border={'1px solid #000000'} margin={'1.5rem auto 0'}  />
            </AnaliseTForm>
        </AnaliseTContainer>
    )
}

export default AnaliseT;
