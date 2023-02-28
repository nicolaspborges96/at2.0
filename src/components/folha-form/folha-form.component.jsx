import { FolhaContainerBody, FormFolha } from './folha-form.styles';
import FormInput from '../../components/form-input/form-input.component';
import { SelectInput } from '../../components/form-input/form-input.styles';
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { useState, useContext } from 'react';
import { CalculoContext } from '../../context/calculo.context';
import { Radio, ConfigProvider } from 'antd';


const defaultFormFields = {
    folha: true,
    faturamento: '',
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
    anexo: 3

}


const FolhaForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { faturamento, faturamentoPJ, planoSaude, valeAlimentacao, valeTransporte, beneficios } = formFields;
    const { pegaInputECalcula } = useContext(CalculoContext);

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        pegaInputECalcula(formFields);
        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormFields({ ...formFields, [name]: value })
    }

    const handleRadioChange = (event) => {
        const { name, value } = event.target;

        if (value === 3) {
            setFormFields({...formFields, anexoIII: true, anexoIV: false, anexoV: false})
        } else if (value === 4) {
            setFormFields({...formFields, anexoIII: false, anexoIV: true, anexoV: false})
        } else if (value === 5) {
            setFormFields({...formFields, anexoIII: false, anexoIV: false, anexoV: true})
        }

    }

    return (
        
        <FolhaContainerBody>
            
            <ConfigProvider theme={{ token: { colorPrimary: '#396600', fontFamily: 'Poppins, sans-serif' } }} >
            <FormFolha onSubmit={onSubmitForm} >
                <FormInput label={'Salário CLT (bruto):'} name='faturamento' value={faturamento} onChange={handleChange} />
                <FormInput label={'Salário PJ (bruto):'} name='faturamento' value={faturamentoPJ} onChange={handleChange} />
                {/*<label>
                    Regime:
                    <SelectInput name='regime' value={regime} onChange={handleChange} >
                        <option onChange={handleChange} name='clt' value={'CLT'}>CLT</option>
                        <option onChange={handleChange} name={'pj'} value={'PJ'} >PJ</option>
                    </SelectInput>
                </label>*/}
                <FormInput name='planoSaude' value={planoSaude} label={'Plano de saúde:'} onChange={handleChange} />
                <FormInput name='valeAlimentacao' value={valeAlimentacao} label={'Vale-refeição/alimentação:'} onChange={handleChange} />
                <FormInput name='valeTransporte' value={valeTransporte} label={'Vale-transporte:'} onChange={handleChange} />
                <FormInput name='beneficios' value={beneficios} label={'Outros benefícios:'} onChange={handleChange} />
                <label style={{margin:'0 auto'}}>
                    <span>Atividade: </span>
                    <Radio.Group onChange={handleRadioChange} name='anexo' >
                        <Radio.Button value={3} name='anexoIII' >Anexo III</Radio.Button>
                        <Radio.Button value={4} name='anexoIV' >Anexo IV</Radio.Button>
                        <Radio.Button value={5} name='anexoV' >Anexo V</Radio.Button>
                        
                    </Radio.Group>
                    
                    
                </label>
            </FormFolha>

            <Button texto={'Calcular'} type='submit' buttonStyle={BUTTON_TYPE_CLASSES.svg} border={'1px solid #c3c8ced4'}
                margin={'1.5rem auto 0'} bgColor={'#ffffff'} width={'200px'} hover={'border: 1px solid #a5c017; color:#396600'}
                onClick={onSubmitForm} />
            </ConfigProvider>
        </FolhaContainerBody>
    )

}

export default FolhaForm;
