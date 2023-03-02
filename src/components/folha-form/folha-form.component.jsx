import { FolhaContainerBody, FormFolha, LabelFormFolha } from './folha-form.styles';
import FormInput from '../../components/form-input/form-input.component';
import { SelectInput } from '../../components/form-input/form-input.styles';
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { useState, useContext } from 'react';
import { CalculoContext } from '../../context/calculo.context';
import { Radio, ConfigProvider, Checkbox } from 'antd';


const defaultFormFields = {
    folha: true,
    faturamento: '',
    salario: '',
    regime: 'CLT',
    planoSaude: '',
    valeAlimentacao: '',
    valeTransporte: '',
    beneficios: '',
    atividade: '',
    anexoIII: true,
    anexoIV: false,
    anexoV: false,
    exterior: false,
    socios: 1,
    fopag: 0,
    anexo: 3,
    detalhar: false

}


const FolhaForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { faturamento, salario, planoSaude, valeAlimentacao, valeTransporte, beneficios, detalhar } = formFields;
    const { pegaInputECalcula, setScroll } = useContext(CalculoContext);
    const [ value, setValue ] = useState(3);

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        pegaInputECalcula(formFields);
        setScroll(true);
        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormFields({ ...formFields, [name]: value })
    }

    const handleChangeCheck = (event) => {
        const { name, checked } = event.target;

        setFormFields({ ...formFields, [name]: checked })
    }

    const handleRadioChange = (event) => {
        const { name, value } = event.target;

        if (value === 3) {
            setFormFields({...formFields, anexoIII: true, anexoIV: false, anexoV: false});
            setValue(3);
        } else if (value === 4) {
            setFormFields({...formFields, anexoIII: false, anexoIV: true, anexoV: false});
            setValue(4);
        } else if (value === 5) {
            setFormFields({...formFields, anexoIII: false, anexoIV: false, anexoV: true});
            setValue(5);
        }

    }

    return (
        
        <FolhaContainerBody>
            
            <ConfigProvider theme={{ token: { colorPrimary: '#396600', fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem' } }} >
            <FormFolha onSubmit={onSubmitForm} >
                <FormInput width={'210px'} label={'Salário CLT (bruto):'} name='salario' value={salario} onChange={handleChange} />
                <FormInput width={'210px'} label={'Salário PJ (bruto):'} name='faturamento' value={faturamento} onChange={handleChange} />
                <FormInput width={'210px'} name='planoSaude' value={planoSaude} label={'Plano de saúde:'} onChange={handleChange} />
                <FormInput width={'210px'} name='valeAlimentacao' value={valeAlimentacao} label={'Vale-refeição/alimentação:'} onChange={handleChange} />
                <FormInput width={'210px'} name='valeTransporte' value={valeTransporte} label={'Vale-transporte:'} onChange={handleChange} />
                <FormInput width={'210px'} name='beneficios' value={beneficios} label={'Outros benefícios:'} onChange={handleChange} />
                <LabelFormFolha>
                    <span style={{margin: 'auto 0.5rem auto 0'}} >Atividade: </span>
                    <Radio.Group onChange={handleRadioChange} name='anexo' value={value} >
                        <Radio.Button value={3} name='anexoIII' >Anexo III</Radio.Button>
                        <Radio.Button value={4} name='anexoIV' >Anexo IV</Radio.Button>
                        <Radio.Button value={5} name='anexoV' >Anexo V</Radio.Button>
                    </Radio.Group>
                </LabelFormFolha>
                <Checkbox name='detalhar' onChange={handleChangeCheck} checked={detalhar} > Exibir versão detalhada</Checkbox>

            </FormFolha>

            <Button texto={'Calcular'} type='submit' buttonStyle={BUTTON_TYPE_CLASSES.svg} border={'1px solid #c3c8ced4'}
                margin={'1.5rem auto 0'} bgColor={'#ffffff'} width={'200px'} hover={'border: 1px solid #a5c017; color:#396600'}
                onClick={onSubmitForm} />
            </ConfigProvider>
        </FolhaContainerBody>
    )

}

export default FolhaForm;
