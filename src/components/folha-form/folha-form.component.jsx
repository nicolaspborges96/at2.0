import {
    ContainerSwitchFolha,
    FolhaContainerBody,
    FormFolha,
    LabelFormFolha,
} from "./folha-form.styles";
import FormInput from "../../components/form-input/form-input.component";
import { SelectInput } from "../../components/form-input/form-input.styles";
import Button, {
    BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { useState, useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import { Radio, ConfigProvider, Checkbox } from "antd";

import { Switch } from "antd";
import { useEffect } from "react";

const defaultFormFields = {
    folha: true,
    faturamento: "",
    salario: "",
    regime: "CLT",
    planoSaude: "",
    valeAlimentacao: "",
    valeTransporte: "",
    beneficios: "",
    atividade: "",
    anexoIII: true,
    anexoIV: false,
    anexoV: false,
    exterior: false,
    socios: 1,
    fopag: 0,
    anexo: 3,
    detalhar: false,
    faturamentoMoeda: "",
    salarioMoeda: "",
    planoSaudeMoeda: "",
    valeAlimentacaoMoeda: "",
    valeTransporteMoeda: "",
    beneficiosMoeda: "",
    moduloProlabore: false,
    valorProlabore: "",
    valorProlaboreMoeda: ""
};

const FolhaForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
        faturamento,
        salario,
        planoSaude,
        valeAlimentacao,
        valeTransporte,
        beneficios,
        detalhar,
        faturamentoMoeda,
        salarioMoeda,
        planoSaudeMoeda,
        valeAlimentacaoMoeda,
        valeTransporteMoeda,
        beneficiosMoeda,
        moduloProlabore,
        valorProlabore,
        valorProlaboreMoeda
    } = formFields;
    const { pegaInputECalcula, setScroll } = useContext(CalculoContext);
    const [value, setValue] = useState(3);

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        pegaInputECalcula(formFields);
        
        setScroll(true);
    };

    function removerFormatacaoMoeda(valor) {
        let value = valor;
        let numero = value.replace(/[.]/g, "");
        let numeroLimpo = numero.replace(",", ".");

        return numeroLimpo;
    }

    const handleChangeMoeda = (event) => {
        let { name, value } = event.target;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d)(\d{2})$/, "$1,$2");
        value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
        const nomeSemMoeda = name.replace("Moeda", "");

        setFormFields({ ...formFields, [name]: value, [nomeSemMoeda]: value });
    };

    const handleBlurInput = (event) => {
        const { name, value } = event.target;
        const valorCru = removerFormatacaoMoeda(value);
        const nomeSemMoeda = name.replace("Moeda", "");
        setFormFields({ ...formFields, [nomeSemMoeda]: valorCru });
        console.log(valorProlabore)
    };

    const handleSwitchChange = (checked) => {
        if(checked) {
            setFormFields({ ...formFields, moduloProlabore: checked });
        } else {
            setFormFields({ ...formFields, moduloProlabore: checked, valorProlaboreMoeda: '', valorProlabore: '' });
            console.log(valorProlabore)
        }
    };

    const handleChangeCheck = (event) => {
        const { name, checked } = event.target;

        setFormFields({ ...formFields, [name]: checked });
    };

    const handleRadioChange = (event) => {
        const { name, value } = event.target;

        if (value === 3) {
            setFormFields({
                ...formFields,
                anexoIII: true,
                anexoIV: false,
                anexoV: false,
            });
            setValue(3);
        } else if (value === 4) {
            setFormFields({
                ...formFields,
                anexoIII: false,
                anexoIV: true,
                anexoV: false,
            });
            setValue(4);
        } else if (value === 5) {
            setFormFields({
                ...formFields,
                anexoIII: false,
                anexoIV: false,
                anexoV: true,
            });
            setValue(5);
        }
    };

    

    return (
        <FolhaContainerBody>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#396600",
                        fontFamily: "Poppins, sans-serif",
                        //fontSize: "0.9rem",
                    },
                }}
            >
                <FormFolha onSubmit={onSubmitForm}>
                    <FormInput
                        label={"Salário PJ (bruto):"}
                        name="faturamentoMoeda"
                        value={faturamentoMoeda}
                        onChange={handleChangeMoeda}
                        onBlur={handleBlurInput}
                        width={"100%"}
                        prefix={"R$"}
                    />
                    <FormInput
                        width={"100%"}
                        prefix={"R$"}
                        label={"Salário CLT (bruto):"}
                        name="salarioMoeda"
                        value={salarioMoeda}
                        onChange={handleChangeMoeda}
                        onBlur={handleBlurInput}
                    />

                    <FormInput
                        width={"100%"}
                        prefix={"R$"}
                        name="planoSaudeMoeda"
                        value={planoSaudeMoeda}
                        label={"Plano de saúde:"}
                        onChange={handleChangeMoeda}
                        onBlur={handleBlurInput}
                    />
                    <FormInput
                        width={"100%"}
                        prefix={"R$"}
                        name="valeAlimentacaoMoeda"
                        value={valeAlimentacaoMoeda}
                        label={"Vale-refeição/alimentação:"}
                        onChange={handleChangeMoeda}
                        onBlur={handleBlurInput}
                    />
                    <FormInput
                        width={"100%"}
                        prefix={"R$"}
                        name="valeTransporteMoeda"
                        value={valeTransporteMoeda}
                        label={"Vale-transporte:"}
                        onChange={handleChangeMoeda}
                        onBlur={handleBlurInput}
                    />
                    <FormInput
                        width={"100%"}
                        prefix={"R$"}
                        name="beneficiosMoeda"
                        value={beneficiosMoeda}
                        label={"Outros benefícios:"}
                        onChange={handleChangeMoeda}
                        onBlur={handleBlurInput}
                    />
                    <LabelFormFolha>
                        <span style={{ margin: "auto 0.5rem auto 0" }}>
                            Atividade:{" "}
                        </span>
                        <Radio.Group
                            onChange={handleRadioChange}
                            name="anexo"
                            value={value}
                        >
                            <Radio.Button value={3} name="anexoIII">
                                Anexo III
                            </Radio.Button>
                            <Radio.Button value={4} name="anexoIV">
                                Anexo IV
                            </Radio.Button>
                            <Radio.Button value={5} name="anexoV">
                                Anexo V
                            </Radio.Button>
                        </Radio.Group>
                    </LabelFormFolha>
                    <Checkbox
                        name="detalhar"
                        onChange={handleChangeCheck}
                        checked={detalhar}
                    >
                        {" "}
                        Exibir versão detalhada
                    </Checkbox>

                    
                        <ContainerSwitchFolha >
                            <Switch
                                checked={moduloProlabore}
                                onChange={handleSwitchChange}
                                name="moduloProlabore"
                            />
                            <span>Módulo cálculo de pró-labore</span>
                        </ContainerSwitchFolha>
                    

                    {moduloProlabore ? (
                        <FormInput
                            width={"100%"}
                            prefix={"R$"}
                            name="valorProlaboreMoeda"
                            value={valorProlaboreMoeda}
                            label={"Valor Pró-labore:"}
                            onChange={handleChangeMoeda}
                            onBlur={handleBlurInput}
                        />
                    ) : (
                        <></>
                    )}
                </FormFolha>

                <Button
                    texto={"Calcular"}
                    type="submit"
                    buttonStyle={BUTTON_TYPE_CLASSES.svg}
                    border={"1px solid #396600"}
                    margin={"1rem auto 0"}
                    bgColor={"#ffffff"}
                    width={"200px"}
                    hover={"border: 1px solid #a5c017; color:#396600"}
                    onClick={onSubmitForm}
                />
            </ConfigProvider>
        </FolhaContainerBody>
    );
};

export default FolhaForm;
