import { useContext, useState } from "react";
import { EfetivaFormStyled } from "./efetiva-form.styles";
import FormInput from "../form-input/form-input.component";
import { ConfigProvider, Radio, Checkbox } from "antd";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { CalculoContext } from "../../context/calculo.context";

const defaultFormFields = {
    faturamento: "",
    faturamentoDoze: "",
    faturamentoMes: "",
    meses: '',
    anoCompleto: true,
    socios: 1,
    funcionarios: 0,
    exterior: 0,
    fopag: 0,
    iss: 3,
    anexoIII: true,
    anexoIV: false,
    anexoV: false,
    anexoI: false,
    anexoII: false,
    atividade: 3
};

const EfetivaForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
        faturamento,
        anoCompleto,
        faturamentoDoze,
        faturamentoMes,
        anexoI,
        anexoII,
        anexoIII,
        anexoIV,
        anexoV,
        meses,
        atividade,
    } = formFields;

    const { pegaInputECalcula, setFaturamentoMes, setScroll } = useContext(CalculoContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if(name === 'faturamentoDoze') {
            setFormFields({ ...formFields, [name]: value, faturamento: (value/12) });
        } else {
            setFormFields({ ...formFields, [name]: value });
        }
            
    };

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        setFaturamentoMes(faturamentoMes);
        pegaInputECalcula(formFields);
        setScroll(true);
        
    };

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        if (value === 1) {
            setFormFields({
                ...formFields,
                atividade: 1,
                anexoI: true,
                anexoII: false,
                anexoIII: false,
                anexoIV: false,
                anexoV: false,
            });
        } else if (value === 2) {
            setFormFields({
                ...formFields,
                atividade: 2,
                anexoI: false,
                anexoII: true,
                anexoIII: false,
                anexoIV: false,
                anexoV: false,
            });
           
        } else if (value === 3) {
            setFormFields({
                ...formFields,
                atividade: 3,
                anexoI: false,
                anexoII: false,
                anexoIII: true,
                anexoIV: false,
                anexoV: false,
            });
            
        } else if (value === 4) {
            setFormFields({
                ...formFields,
                atividade: 4,
                anexoI: false,
                anexoII: false,
                anexoIII: false,
                anexoIV: true,
                anexoV: false,
            });
           
        } else if (value === 5) {
            setFormFields({
                ...formFields,
                atividade: 5,
                anexoI: false,
                anexoII: false,
                anexoIII: false,
                anexoIV: false,
                anexoV: true,
            });
        }
    };


    return (
        <EfetivaFormStyled onSubmit={onSubmitForm}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#396600",
                        fontFamily: "Poppins, sans-serif",
                    },
                }}
            >
                <FormInput
                    label={"Qual o faturamento do mês?"}
                    name="faturamentoMes"
                    value={faturamentoMes}
                    onChange={handleChange}
                />

                <label>A empresa tem 12 ou mais meses de funcionamento?</label>
                <Radio.Group
                    name="anoCompleto"
                    onChange={handleChange}
                    value={anoCompleto}
                >
                    <Radio value={true}>Sim</Radio>
                    <Radio value={false}>Não</Radio>
                </Radio.Group>
                {anoCompleto ? (
                    <FormInput
                        label={"Qual a receita dos últimos 12 meses (RBT12) ?"}
                        name="faturamentoDoze"
                        value={faturamentoDoze}
                        onChange={handleChange}
                    />
                ) : (
                    <>
                        <FormInput
                            label={
                                "Qual a receita proporcionalizada (RBT12p) ?"
                            }
                            name="faturamentoDoze"
                            value={faturamentoDoze}
                            onChange={handleChange}
                        />
                        
                    </>
                )}
                
                <label>Qual a atividade exercida?</label>
                <Radio.Group
                    name="atividade"
                    onChange={handleRadioChange}
                    value={atividade}
                >
                    <Radio value={1}>Comércio</Radio>
                    <Radio value={2}>Indústria</Radio>
                    <Radio value={3}>Anexo III</Radio>
                    <Radio value={4}>Anexo IV</Radio>
                    <Radio value={5}>Anexo V</Radio>
                </Radio.Group>
                
                <Button
                texto={"Calcular"}
                type="submit"
                buttonStyle={BUTTON_TYPE_CLASSES.svg}
                border={"1px solid #c3c8ced4"}
                margin={"1.5rem auto 1rem"}
                bgColor={"#ffffff"}
                width={"200px"}
                hover={"border: 1px solid #a5c017; color:#396600"}
            />
            </ConfigProvider>
        </EfetivaFormStyled>
    );
};

export default EfetivaForm;
