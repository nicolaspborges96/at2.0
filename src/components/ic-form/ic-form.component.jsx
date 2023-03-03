import { IcFormStyled } from "./ic-form.styles";
import FormInput from "../form-input/form-input.component";
import { Checkbox, ConfigProvider } from "antd";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { useState } from "react";
import { useContext } from 'react';
import { CalculoContext } from '../../context/calculo.context';

const defaultFormFields = {
    faturamento: '',
    anexoI: false,
    anexoII: false,
    anexoIII: false,
    anexoIV: false,
    anexoV: false,
    lucroP: false,
    autonomo: false,
    socios: 1
}

const IcForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { anexoI, anexoII, faturamento, socios } = formFields;
    const { pegaInputECalcula, setScroll } = useContext(CalculoContext);

    const handleChangeCheck = (event) => {
        const { name, checked } = event.target;
        setFormFields({ ...formFields, [name]: checked })
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        setScroll(true);
        pegaInputECalcula(formFields);
        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <IcFormStyled onSubmit={onSubmitForm} >
            <FormInput label={'Qual o faturamento médio da empresa?'} name='faturamento' value={faturamento} onChange={handleChange} />
            <FormInput label={'Quantos sócios tem a empresa?'} name='socios' value={socios} onChange={handleChange} />
            <div style={{display:'flex', justifyContent:'space-between'}} >
            <ConfigProvider theme={{ token: { colorPrimary: '#396600', fontFamily: 'Poppins, sans-serif' } }} >
                <Checkbox onChange={handleChangeCheck} name='anexoI' checked={anexoI} >Comércio</Checkbox>
                <Checkbox onChange={handleChangeCheck} name='anexoII' checked={anexoII} >Indústria</Checkbox>
                
            </ConfigProvider>
            </div>

            <Button texto={'Calcular'} type='submit' buttonStyle={BUTTON_TYPE_CLASSES.svg} border={'1px solid #c3c8ced4'} 
            margin={'1.5rem auto 1rem'} bgColor={'#ffffff'} width={'200px'} hover={'border: 1px solid #a5c017; color:#396600'} />
            
        </IcFormStyled>
    )
}

export default IcForm;