import { createContext, useState } from "react";
import ALIQUOTAS from '../aliquotas.js';

const calculaAliquotaEfetiva = (faturamento, aliqNominal, deducao, percentExt, exterior) => {
    const fatDoze = faturamento*12;
    let aliqEfetiva = 0;
    if (exterior) {
        aliqEfetiva = (((fatDoze * aliqNominal) - deducao) / fatDoze)*percentExt;
    } else {    
        aliqEfetiva = ((fatDoze * aliqNominal) - deducao) / fatDoze;
    }
    
    return aliqEfetiva;
}

const verificaFaixa = (faturamento) => {

    let faturamentoDozeMeses = faturamento*12;
    let faixa = "";
    if (faturamentoDozeMeses <0 || faturamentoDozeMeses >4800000) {
        console.log("Faturamento Inválido")
    } else if(faturamentoDozeMeses>=0 && faturamentoDozeMeses <=180000) {
        faixa = "Faixa 1";
    } else if (faturamentoDozeMeses<=360000) {
        faixa = "Faixa 2";
    } else if (faturamentoDozeMeses <= 720000){
        faixa = "Faixa 3";
    } else if (faturamentoDozeMeses <= 1800000){
        faixa = "Faixa 4";
    } else if (faturamentoDozeMeses <= 3600000){
        faixa = "Faixa 5";
    } else if (faturamentoDozeMeses <= 4800000){
        faixa = "Faixa 6"
    } 

    return faixa;
}

const calculaAnexoIII = (faturamento, exterior) => {
    const faixa =  verificaFaixa(faturamento);

    const anexo = ALIQUOTAS.find((item, index) => {
        return item.title == 'anexoIII';
    });

    const aliquotas = anexo.items.find((item, index) => {
        return item.nome == faixa
    });

    const aliquotaEfetiva = calculaAliquotaEfetiva(faturamento, aliquotas.aliquota, aliquotas.deducao, aliquotas.percentualExterior, exterior);

    const das = aliquotaEfetiva*faturamento;
    
}

const calculaAnexoIV = (faturamento, exterior) => {
    const faixa =  verificaFaixa(faturamento);

    const anexo = ALIQUOTAS.find((item, index) => {
        return item.title == 'anexoIV';
    });

    const aliquotas = anexo.items.find((item, index) => {
        return item.nome == faixa
    });

    const aliquotaEfetiva = calculaAliquotaEfetiva(faturamento, aliquotas.aliquota, aliquotas.deducao, aliquotas.percentualExterior, exterior);

    const das = aliquotaEfetiva*faturamento;
    
}

const calculaAnexoV = (faturamento, exterior) => {
    const faixa =  verificaFaixa(faturamento);

    const anexo = ALIQUOTAS.find((item, index) => {
        return item.title == 'anexoV';
    });

    const aliquotas = anexo.items.find((item, index) => {
        return item.nome == faixa
    });

    const aliquotaEfetiva = calculaAliquotaEfetiva(faturamento, aliquotas.aliquota, aliquotas.deducao, aliquotas.percentualExterior, exterior);

    const das = aliquotaEfetiva*faturamento;
    
}

const calculaLucroPresumido = (faturamento, exterior, inputIss) => {
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

    if(exterior) {
        aliqLP.pis = 0;
        aliqLP.cofins = 0;
    } else {
        aliqLP.iss = inputIss/100;
        aliqLP.pis = 0.0065;
        aliqLP.cofins = 0.03;
    }

    if (faturamento >= 62500) {
        const fatTri = faturamento*3;
        const limiteIsencao = 60000;
        const bCIRPJ = fatTri*0.32;
        custoLP.adicionalIR = ((bCIRPJ - limiteIsencao)*0.1)/3;
        aliqLP.addIR = (custoLP.adicionalIR / fatTri);
        valorLP += custoLP.adicionalIR;
    }

    for ( let i = 0; i < nomesImpostos.length; i++) {
        if (nomesImpostos[i] == 'pis') {
            custoLP.pis += aliqLP.pis * faturamento;
            valorLP += custoLP.pis;
            totalAliqLP += aliqLP.pis;
        } else if (nomesImpostos[i] == 'cofins') {
            custoLP.cofins += aliqLP.cofins * faturamento;
            valorLP += custoLP.cofins;
            totalAliqLP += aliqLP.cofins;
        } else if (nomesImpostos[i] == 'irpj') {
            custoLP.irpj += aliqLP.irpj * faturamento;
            valorLP += custoLP.irpj;
            totalAliqLP += aliqLP.irpj;
        } else if (nomesImpostos[i] == 'csll') {
            custoLP.csll += aliqLP.csll * faturamento;
            valorLP += custoLP.csll;
            totalAliqLP += aliqLP.csll;
        } else if (nomesImpostos[i] == 'iss') {
            custoLP.iss += aliqLP.iss * faturamento;
            valorLP += custoLP.iss;
            totalAliqLP += aliqLP.iss;
        } 
    }

    console.log(aliqLP, custoLP, valorLP, totalAliqLP)
    return { aliqLP, custoLP, valorLP, totalAliqLP }
}

const gerenciaCalculo = (dados) => {
    
    if(dados.anexoIII)
        calculaAnexoIII(dados.faturamento, dados.exterior);
    
    if(dados.anexoIV)
        calculaAnexoIV(dados.faturamento, dados.exterior);
    
    if(dados.anexoV)
        calculaAnexoV(dados.faturamento, dados.exterior);

    if (dados.lucroP)
        calculaLucroPresumido(dados.faturamento, dados.exterior, dados.iss);

     
}

export const CaculoContext = createContext({
    pegaDadosinput: () => {}

});


export const CalculoProvider = ({children}) => {
    
    const pegaDadosInput = (dados) => {
        
        gerenciaCalculo(dados)
    }
    
    const value = { pegaDadosInput }

    return (
        <CaculoContext.Provider value={value}>{children}</CaculoContext.Provider>
    )

}