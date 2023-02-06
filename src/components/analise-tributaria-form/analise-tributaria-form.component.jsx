import { ReactComponent as LogoHorizontalSvg } from '../../assets/logo-horizontal.svg';
import FormInput from '../../components/form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { ConfigProvider, Radio, Slider, Checkbox } from 'antd';
import { useState } from 'react';
import { AnaliseTFormStyled } from './analise-tributaria-form.styles';
import { useContext } from 'react';
import { CaculoContext } from '../../context/calculo.context';
import { useRef } from 'react';

const marks = {
    2: '2%',
    3: '3%',
    4: '4%',
    5: '5%',
}

const defaultFormFields = {
    faturamento: '',
    socios: 1,
    funcionarios: 0,
    exterior: 0,
    fopag: 0,
    iss: 3,
    anexoIII: false,
    anexoIV: false,
    anexoV: false,
    lucroP: false,
}

const slider = [2, 3, 4, 5];

const AnaliseTForm = ({ ...props }) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { faturamento, socios, funcionarios, exterior, fopag, iss, anexoIII, anexoIV, anexoV, lucroP } = formFields;
    const [sliderIndex, setSliderIndex] = useState(slider[1]);
    const { pegaInputECalcula, setScroll } = useContext(CaculoContext);


    const onChangeFuncionario = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const onChangeExterior = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    const handleSliderChange = (event) => {
        setSliderIndex(event);
        setFormFields({ ...formFields, iss: event })
    }

    const handleChangeCheck = (event) => {
        const { name, checked } = event.target;

        setFormFields({ ...formFields, [name]: checked })
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        pegaInputECalcula(formFields);
        setScroll(true);

    }

    return (
        <AnaliseTFormStyled onSubmit={onSubmitForm} >
            <ConfigProvider theme={{ token: { colorPrimary: '#396600', fontFamily: 'Poppins, sans-serif' } }} >
                <FormInput label={'Qual o faturamento médio da empresa?'} name='faturamento' value={faturamento} onChange={handleChange} />
                <FormInput label={'Quantos sócios tem a empresa?'} name='socios' value={socios} onChange={handleChange} />


                <label>A empresa tem funcionários?</label>

                <Radio.Group name='funcionarios' onChange={onChangeFuncionario} value={funcionarios} label={'A empresa tem funcionários?'}>
                    <Radio value={1}>Sim</Radio>
                    <Radio value={0}>Não</Radio>
                </Radio.Group>

                {
                    funcionarios ? (
                        <FormInput label={'Valor da folha de pagamento (bruto):'} name='fopag' value={fopag} onChange={handleChange} />
                    ) : (
                        <></>
                    )
                }

                <label>A empresa presta serviço para o exterior?</label>
                <Radio.Group name='exterior' onChange={onChangeExterior} value={exterior} label={'A empresa tem funcionários?'}>
                    <Radio value={1}>Sim</Radio>
                    <Radio value={0}>Não</Radio>
                </Radio.Group>

                {
                    exterior ? (
                        <></>
                    ) : (
                        <>
                            <label>Alíquota de ISS da atividade: </label>
                            <Slider marks={marks} max={5} min={2} trackStyle={{ backgroundColor: '#396600' }} onChange={handleSliderChange} name='iss' value={sliderIndex}
                                style={{ width: '60%' }} />
                        </>

                    )
                }
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Checkbox onChange={handleChangeCheck} name='anexoIII' checked={anexoIII}  >Anexo III</Checkbox>
                    <Checkbox onChange={handleChangeCheck} name='anexoIV' checked={anexoIV}  >Anexo IV</Checkbox>
                    <Checkbox onChange={handleChangeCheck} name='anexoV' checked={anexoV}  >Anexo V</Checkbox>
                    <Checkbox onChange={handleChangeCheck} name='lucroP' checked={lucroP}  >Lucro Presumido</Checkbox>
                </div>


            </ConfigProvider>

            <Button texto={'Calcular'} type='submit' buttonStyle={BUTTON_TYPE_CLASSES.svg} border={'1px solid #000000'} margin={'1.5rem auto 0'} />
        </AnaliseTFormStyled>

    )
}

export default AnaliseTForm;
