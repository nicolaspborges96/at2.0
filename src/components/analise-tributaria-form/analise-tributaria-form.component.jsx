import FormInput from "../../components/form-input/form-input.component";
import Button, {
    BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { ConfigProvider, Radio, Slider, Checkbox, Switch } from "antd";
import { useEffect, useState } from "react";
import {
    AnaliseTContainerCheckbox,
    AnaliseTFormStyled,
    CheckBoxDetalharCard,
    ContainerSwitch,
} from "./analise-tributaria-form.styles";
import { useContext } from "react";
import { CalculoContext } from "../../context/calculo.context";
import TextContainer from "../text-container/text-container.component";

const marks = {
    2: "2%",
    3: "3%",
    4: "4%",
    5: "5%",
};

const defaultFormFields = {
    faturamento: "",
    faturamentoMoeda: "",
    socios: 1,
    funcionarios: 0,
    exterior: 0,
    fopag: "",
    fopagMoeda: "", 
    iss: 3,
    anexoIII: false,
    anexoIV: false,
    anexoV: false,
    lucroP: false,
    autonomo: false,
    cardDetalhado: false,
    anexoI: false,
    anexoII: false,
    contabilidades: false
};

const slider = [2, 3, 4, 5];

const AnaliseTForm = ({ ...props }) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
        faturamentoMoeda,
        faturamento,
        socios,
        funcionarios,
        exterior,
        fopag,
        fopagMoeda,
        iss,
        anexoIII,
        anexoIV,
        anexoV,
        lucroP,
        autonomo,
        cardDetalhado,
        anexoI,
        anexoII,
        contabilidades
    } = formFields;
    const [sliderIndex, setSliderIndex] = useState(slider[1]);
    const { pegaInputECalcula, setScroll } = useContext(CalculoContext);
    const [compara, setCompara] = useState(false);

    const onChangeFuncionario = (e) => {
        const { name, value } = e.target;
        
        setFormFields({ ...formFields, [name]: value, fopagMoeda: '', fopag: 0 });
    };

    const onChangeExterior = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSliderChange = (event) => {
        setSliderIndex(event);
        setFormFields({ ...formFields, iss: event });
    };

    const handleChangeCheck = (event) => {
        const { name, checked } = event.target;
        setFormFields({ ...formFields, [name]: checked });
    };

    const handleSwitchChange = (checked) => {
        setFormFields({...formFields, contabilidades: checked})
    }

    const handleChangeMoeda = (event) => {
        let { name, value } = event.target;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d)(\d{2})$/, "$1,$2");
        value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

        setFormFields({ ...formFields, [name]: value });
    };

    const handleBlurInput = (event) => {
        const { value } = event.target;
        const valorCru = removerFormatacaoMoeda(value);

        setFormFields({...formFields, faturamento: valorCru});
    }

    const handleBlurInputFopag = (event) => {
        const { value } = event.target;
        const valorCru = removerFormatacaoMoeda(value);
        
        setFormFields({...formFields, fopag: valorCru});
    }

    function removerFormatacaoMoeda(valor) {
        let value = valor;
        let numero = value.replace(/[.]/g,"");
        let numeroLimpo = numero.replace(',','.');
        
        return numeroLimpo;
    }

    const verificaIndCom = (
        anexoI,
        anexoII,
        anexoIII,
        anexoIV,
        anexoV,
        lucroP,
        autonomo
    ) => {
        if (
            (anexoI && (anexoIII || anexoIV || anexoV || lucroP || autonomo))
        ) {
            return true;
        }else if (anexoII && (anexoIII || anexoIV || anexoV || lucroP || autonomo)) {
            return true;
        } else if (anexoI&&anexoII) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(()=> {
        setCompara(verificaIndCom(anexoI, anexoII, anexoIII, anexoIV, anexoV, lucroP, autonomo));
    }, [anexoI, anexoII, anexoIII, anexoIV, anexoV, lucroP, autonomo]);
    

    const onSubmitForm = (ev) => {
        ev.preventDefault();
    
        pegaInputECalcula(formFields);
        
        setScroll(true);
    };

    return (
        <AnaliseTFormStyled onSubmit={onSubmitForm}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#396600",
                        fontFamily: "Poppins, sans-serif",
                    },
                }}
            >
                <FormInput
                    label={"Qual o faturamento médio da empresa?"}
                    name="faturamentoMoeda"
                    value={faturamentoMoeda}
                    width={"100%"}
                    prefix={"R$"}
                    onChange={handleChangeMoeda}
                    onBlur={handleBlurInput}
                />
                <FormInput
                    label={"Quantos sócios tem a empresa?"}
                    name="socios"
                    value={socios}
                    width={"100%"}
                    onChange={handleChange}
                />

                <label>A empresa tem funcionários?</label>

                <Radio.Group
                    name="funcionarios"
                    onChange={onChangeFuncionario}
                    value={funcionarios}
                >
                    <Radio value={1}>Sim</Radio>
                    <Radio value={0}>Não</Radio>
                </Radio.Group>

                {funcionarios ? (
                    <FormInput
                        label={"Valor da folha de pagamento (bruto):"}
                        name="fopagMoeda"
                        value={fopagMoeda}
                        width={"40%"}
                        prefix={"R$"}
                        onChange={handleChangeMoeda}
                        onBlur={handleBlurInputFopag}
                    />
                ) : (
                    <></>
                )}

                <label>A empresa presta serviço para o exterior?</label>
                <Radio.Group
                    name="exterior"
                    onChange={onChangeExterior}
                    value={exterior}
                >
                    <Radio value={1}>Sim</Radio>
                    <Radio value={0}>Não</Radio>
                </Radio.Group>

                {exterior ? (
                    <></>
                ) : (
                    <>
                        <label>Alíquota de ISS da atividade: </label>
                        <Slider
                            marks={marks}
                            max={5}
                            min={2}
                            trackStyle={{ backgroundColor: "#396600" }}
                            onChange={handleSliderChange}
                            name="iss"
                            value={sliderIndex}
                            style={{ width: "50%" }}
                        />
                    </>
                )}
                <AnaliseTContainerCheckbox>
                    <Checkbox
                        onChange={handleChangeCheck}
                        name="anexoIII"
                        checked={anexoIII}
                    >
                        Anexo III
                    </Checkbox>
                    <Checkbox
                        onChange={handleChangeCheck}
                        name="anexoIV"
                        checked={anexoIV}
                    >
                        Anexo IV
                    </Checkbox>
                    <Checkbox
                        onChange={handleChangeCheck}
                        name="anexoV"
                        checked={anexoV}
                    >
                        Anexo V
                    </Checkbox>
                    <Checkbox
                        onChange={handleChangeCheck}
                        name="anexoI"
                        checked={anexoI}
                    >
                        Comércio
                    </Checkbox>
                    <Checkbox
                        onChange={handleChangeCheck}
                        name="autonomo"
                        checked={autonomo}
                    >
                        Autonômo
                    </Checkbox>

                    <Checkbox
                        onChange={handleChangeCheck}
                        name="anexoII"
                        checked={anexoII}
                    >
                        Indústria
                    </Checkbox>
                    <Checkbox
                        onChange={handleChangeCheck}
                        name="lucroP"
                        checked={lucroP}
                    >
                        Lucro Presumido
                    </Checkbox>
                </AnaliseTContainerCheckbox>
                {compara ? (
                    <TextContainer
                        texto={
                            "Não é correto comparar comércio, indústria e os demais(prestação de serviço), uma vez que são atividades diferentes!"
                        }
                    />
                ) : (
                    <></>
                )}
                {anexoV ? (
                    <ContainerSwitch>
                        <Switch defaultChecked onChange={handleSwitchChange} name='contabilidades' />
                        <span>Comparar com outras contabilidades</span>
                        
                    </ContainerSwitch>
                ) : (
                    <></>
                )}
            </ConfigProvider>

            <Button
                texto={"Calcular"}
                type="submit"
                buttonStyle={BUTTON_TYPE_CLASSES.svg}
                border={"1px solid #396600"}
                margin={"1.5rem auto 1rem"}
                bgColor={"#ffffff"}
                width={"200px"}
                hover={"border: 1px solid #a5c017; color:#396600"}
            />
        </AnaliseTFormStyled>
    );
};

export default AnaliseTForm;
