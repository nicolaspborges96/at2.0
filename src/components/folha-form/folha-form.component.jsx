import { FolhaContainerBody, FormFolha } from './folha-form.styles';
import FormInput from '../../components/form-input/form-input.component';
import { SelectInput } from '../../components/form-input/form-input.styles';
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { useState, useContext } from 'react';
import { CalculoContext } from '../../context/calculo.context';
import { Radio } from 'antd';


const defaultFormFields = {
    folha: true,
    salario: '',
    regime: 'CLT',
    planoSaude: '',
    valeAlimentacao: '',
    valeTransporte: '',
    beneficios: '',
    atividade: 'Anexo III'
}


const FolhaForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { salario, regime, planoSaude, valeAlimentacao, valeTransporte, beneficios, atividade } = formFields;
    const { pegaInputECalcula } = useContext(CalculoContext);

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        console.log(formFields)
        pegaInputECalcula(formFields);

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (

        <FolhaContainerBody>
            <FormFolha onSubmit={onSubmitForm} >
                <FormInput label={'Salário mensal (bruto):'} name='salario' value={salario} onChange={handleChange} />
                <label>
                    Regime:
                    <SelectInput name='regime' value={regime} onChange={handleChange} >
                        <option onChange={handleChange} name='clt' value={'CLT'}>CLT</option>
                        <option onChange={handleChange} name={'pj'} value={'PJ'} >PJ</option>
                    </SelectInput>
                </label>
                <FormInput name='planoSaude' value={planoSaude} label={'Plano de saúde:'} onChange={handleChange} />
                <FormInput name='valeAlimentacao' value={valeAlimentacao} label={'Vale-refeição/alimentação:'} onChange={handleChange} />
                <FormInput name='valeTransporte' value={valeTransporte} label={'Vale-transporte:'} onChange={handleChange} />
                <FormInput name='beneficios' value={beneficios} label={'Outros benefícios:'} onChange={handleChange} />
                <label>
                    Atividade:
                    <Radio.Group onChange={handleChange} >
                        <Radio.Button value={3} name >Anexo III</Radio.Button>
                        <Radio.Button value={4} >Anexo IV</Radio.Button>
                        <Radio.Button value={5} >Anexo V</Radio.Button>
                        
                    </Radio.Group>
                    {/*
                        <SelectInput name='atividade' value={atividade} onChange={handleChange} >
                        <option value={'anexoIII'} name='Anexo III'>Anexo III</option>
                        <option value={'anexoIV'} name='Anexo IV'>Anexo IV</option>
                        <option value={'anexoV'} name='Anexo V'>Anexo V</option>
                        <option value={'fatorR'} name='Fator R'>Fator R</option>
                    </SelectInput>
                    */}
                    
                </label>
            </FormFolha>

            <Button texto={'Calcular'} type='submit' buttonStyle={BUTTON_TYPE_CLASSES.svg} border={'1px solid #c3c8ced4'}
                margin={'1.5rem auto 0'} bgColor={'#ffffff'} width={'200px'} hover={'border: 1px solid #a5c017; color:#396600'}
                onClick={onSubmitForm} />

        </FolhaContainerBody>
    )

}

export default FolhaForm;
