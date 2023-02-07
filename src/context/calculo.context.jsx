import { createContext, useState } from "react";
import ALIQUOTAS from '../aliquotas.js';


function calculaProlabore(faturamentoMensal, quantidadeSocios, valorFolha, tipoTributario) {
    let proLabore = {
        valor: 1302,
        inss: 143.22,
        irrf: 0,
        patronal: 0
    };

    if (tipoTributario === 'anexoVR') {
        let fatorR = (faturamentoMensal * 0.28).toFixed(2);
        let baseDeCalculoIR;
        let tetoInss = 7507.49;


        if (valorFolha > 0) {
            fatorR = fatorR - valorFolha;
        }
        if ((fatorR / quantidadeSocios) < 1302) {
            proLabore.valor = 1302;
        } else {
            proLabore.valor = fatorR / quantidadeSocios;

        }

        if (proLabore.valor > tetoInss) {
            proLabore.inss = 825.82;
        } else {
            proLabore.inss = proLabore.valor * 0.11;
        }

        baseDeCalculoIR = proLabore.valor - proLabore.inss;

        if ((baseDeCalculoIR) > 1903.98 && (baseDeCalculoIR) <= 2826.65) {
            proLabore.irrf = baseDeCalculoIR * 0.075 - 142.8;
        } else if (baseDeCalculoIR > 2826.65 && baseDeCalculoIR <= 3751.05) {
            proLabore.irrf = baseDeCalculoIR * 0.15 - 354.80;
        } else if (baseDeCalculoIR > 3751.05 && baseDeCalculoIR <= 4664.68) {
            proLabore.irrf = baseDeCalculoIR * 0.225 - 636.13;
        } else if (baseDeCalculoIR > 4664.68) {
            proLabore.irrf = baseDeCalculoIR * 0.275 - 869.36;
        }
        proLabore.irrf = parseFloat(proLabore.irrf.toFixed(2));

        if (quantidadeSocios > 1) {
            proLabore.inss *= quantidadeSocios;
            proLabore.irrf *= quantidadeSocios;
        }

        return proLabore;

    } else if (tipoTributario === 'anexoIV' || tipoTributario === 'LP') {
        proLabore.patronal = 260.4;
        if (quantidadeSocios > 1) {
            proLabore.inss *= quantidadeSocios;
            proLabore.patronal *= quantidadeSocios;
        }
        return proLabore;

    } else {
        if (quantidadeSocios > 1) {
            proLabore.inss *= quantidadeSocios;
        }
        return proLabore;
    }

}

const calculaAliquotaEfetiva = (faturamento, aliqNominal, deducao, percentExt, exterior) => {
    const fatDoze = faturamento * 12;
    let aliqEfetiva = 0;
    if (exterior) {
        aliqEfetiva = (((fatDoze * aliqNominal) - deducao) / fatDoze) * percentExt;
    } else {
        aliqEfetiva = ((fatDoze * aliqNominal) - deducao) / fatDoze;
    }

    return aliqEfetiva;
}

const verificaFaixa = (faturamento) => {

    let faturamentoDozeMeses = faturamento * 12;
    let faixa = "";
    if (faturamentoDozeMeses < 0 || faturamentoDozeMeses > 4800000) {
        console.log("Faturamento Inválido")
    } else if (faturamentoDozeMeses >= 0 && faturamentoDozeMeses <= 180000) {
        faixa = "Faixa 1";
    } else if (faturamentoDozeMeses <= 360000) {
        faixa = "Faixa 2";
    } else if (faturamentoDozeMeses <= 720000) {
        faixa = "Faixa 3";
    } else if (faturamentoDozeMeses <= 1800000) {
        faixa = "Faixa 4";
    } else if (faturamentoDozeMeses <= 3600000) {
        faixa = "Faixa 5";
    } else if (faturamentoDozeMeses <= 4800000) {
        faixa = "Faixa 6"
    }

    return faixa;
}

const calculaSimples = (faturamento, exterior, socios, folhaFuncionario, titulo) => {
    const faixa = verificaFaixa(faturamento);

    const anexo = ALIQUOTAS.find((item, index) => {
        return item.title === titulo;
    });

    const aliquotas = anexo.items.find((item, index) => {
        return item.nome === faixa;
    });

    const aliquotaEfetiva = calculaAliquotaEfetiva(faturamento, aliquotas.aliquota, aliquotas.deducao, aliquotas.percentualExterior, exterior);

    const das = aliquotaEfetiva * faturamento;

    const proLabore = calculaProlabore(faturamento, socios, folhaFuncionario, titulo);

    return { das, faixa, aliquotaEfetiva, titulo, faturamento, proLabore }
}

const calculaFatorR = (faturamento, exterior, socios, folhaFuncionario, infoAnexo) => {
    const faixa = verificaFaixa(faturamento);
    const titulo = 'anexoVR';

    const anexo = ALIQUOTAS.find((item, index) => {
        return item.title === infoAnexo;
    });

    const aliquotas = anexo.items.find((item, index) => {
        return item.nome === faixa;
    });

    const aliquotaEfetiva = calculaAliquotaEfetiva(faturamento, aliquotas.aliquota, aliquotas.deducao, aliquotas.percentualExterior, exterior);

    const das = aliquotaEfetiva * faturamento;

    const proLabore = calculaProlabore(faturamento, socios, folhaFuncionario, titulo);

    return { das, faixa, aliquotaEfetiva, titulo, faturamento, proLabore }
}

const calculaLucroPresumido = (faturamento, exterior, inputIss, socios, folhaFuncionario, titulo) => {
    
    let aliqLP = {
        pis: 0.0065,
        cofins: 0.03,
        irpj: 0.048,
        csll: 0.0288,
        iss: 0,
        addIR: 0,
    };

    let custoLP = {
        pis: 0,
        cofins: 0,
        irpj: 0,
        csll: 0,
        iss: 0,
        adicionalIR: 0
    }

    let valorLP = 0;
    let totalAliqLP = 0;
    let nomesImpostos = Object.keys(aliqLP)

    if (exterior) {
        aliqLP.pis = 0;
        aliqLP.cofins = 0;
    } else {
        aliqLP.iss = inputIss / 100;
        aliqLP.pis = 0.0065;
        aliqLP.cofins = 0.03;
    }

    if (faturamento >= 62500) {
        const fatTri = faturamento * 3;
        const limiteIsencao = 60000;
        const bCIRPJ = fatTri * 0.32;
        custoLP.adicionalIR = ((bCIRPJ - limiteIsencao) * 0.1) / 3;
        aliqLP.addIR = (custoLP.adicionalIR / fatTri);
        valorLP += custoLP.adicionalIR;
    }

    for (let i = 0; i < nomesImpostos.length; i++) {
        if (nomesImpostos[i] === 'pis') {
            custoLP.pis += aliqLP.pis * faturamento;
            valorLP += custoLP.pis;
            totalAliqLP += aliqLP.pis;
        } else if (nomesImpostos[i] === 'cofins') {
            custoLP.cofins += aliqLP.cofins * faturamento;
            valorLP += custoLP.cofins;
            totalAliqLP += aliqLP.cofins;
        } else if (nomesImpostos[i] === 'irpj') {
            custoLP.irpj += aliqLP.irpj * faturamento;
            valorLP += custoLP.irpj;
            totalAliqLP += aliqLP.irpj;
        } else if (nomesImpostos[i] === 'csll') {
            custoLP.csll += aliqLP.csll * faturamento;
            valorLP += custoLP.csll;
            totalAliqLP += aliqLP.csll;
        } else if (nomesImpostos[i] === 'iss') {
            custoLP.iss += aliqLP.iss * faturamento;
            valorLP += custoLP.iss;
            totalAliqLP += aliqLP.iss;
        }
    }

    const proLabore = calculaProlabore(faturamento, socios, folhaFuncionario, titulo);
    valorLP += proLabore.inss + proLabore.patronal;
    totalAliqLP += (proLabore.inss + proLabore.patronal)/faturamento;
    
    return { aliqLP, custoLP, valorLP, totalAliqLP, titulo, proLabore, faturamento }
}

const gerenciaCalculo = (dados) => {
    let respostas = [];

    if (dados.anexoIII) {
        const titulo = 'anexoIII';
        const resultadoIII = calculaSimples(dados.faturamento, dados.exterior, dados.socios, dados.fopag, titulo);
        respostas.push(resultadoIII);
    }

    if (dados.anexoIV) {
        const titulo = 'anexoIV';
        const resultadoIV = calculaSimples(dados.faturamento, dados.exterior, dados.socios, dados.fopag, titulo);
        respostas.push(resultadoIV)
    }
    if (dados.anexoV) {
        const titulo = 'anexoV';
        const tituloComR = 'anexoIII'
        const resultadoV = calculaSimples(dados.faturamento, dados.exterior, dados.socios, dados.fopag, titulo);
        const resultadoVComR = calculaFatorR(dados.faturamento, dados.exterior, dados.socios, dados.fopag, tituloComR);
        respostas.push(resultadoV);
        respostas.push(resultadoVComR);
    }
    if (dados.lucroP) {
        const titulo = 'LP';
        const resultadoLP = calculaLucroPresumido(dados.faturamento, dados.exterior, dados.iss, dados.socios, dados.fopag, titulo);
        respostas.push(resultadoLP);
    }

    return respostas;
}

export const CaculoContext = createContext({
    pegaInputECalcula: () => { },
    isCardShown: false,
    setCardShown: () => { }

});


export const CalculoProvider = ({ children }) => {

    const [isCardShown, setCardShown] = useState(false);
    const [resultados, setResultados] = useState([]);
    const [scroll, setScroll] = useState(false);

    const pegaInputECalcula = (dados) => {
        
        setCardShown(true);
        const output = gerenciaCalculo(dados);
        setResultados(output);

        return;
    }



    const value = { pegaInputECalcula, isCardShown, setCardShown, resultados, scroll, setScroll }

    return (
        <CaculoContext.Provider value={value}>{children}</CaculoContext.Provider>
    )

}