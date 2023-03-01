import { createContext, useState } from "react";
import ALIQUOTAS from '../aliquotas.js';


const calculaIRRF = (baseDeCalculoIR) => {
    let irrf = 0;
    if ((baseDeCalculoIR) > 1903.98 && (baseDeCalculoIR) <= 2826.65) {
        irrf = baseDeCalculoIR * 0.075 - 142.8;
    } else if (baseDeCalculoIR > 2826.65 && baseDeCalculoIR <= 3751.05) {
        irrf = baseDeCalculoIR * 0.15 - 354.80;
    } else if (baseDeCalculoIR > 3751.05 && baseDeCalculoIR <= 4664.68) {
        irrf = baseDeCalculoIR * 0.225 - 636.13;
    } else if (baseDeCalculoIR > 4664.68) {
        irrf = baseDeCalculoIR * 0.275 - 869.36;
    }
    irrf = parseFloat(irrf.toFixed(2));

    return irrf;
}

const calculaProlabore = (faturamentoMensal, quantidadeSocios, valorFolha, tipoTributario, cppDas) => {
    let proLabore = {
        valor: 1302,
        inss: 143.22,
        irrf: 0,
        patronal: 0
    };

    if (tipoTributario === 'anexoVR') {
        const fgtsFatoR = valorFolha*0.08;
    
        let fatorR = ((faturamentoMensal * 0.28) - cppDas - fgtsFatoR).toFixed(2);
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

        
        proLabore.irrf = calculaIRRF(baseDeCalculoIR);

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

    const proLabore = calculaProlabore(faturamento, socios, folhaFuncionario, titulo, 0);
    const { valor, inss, irrf, patronal } = proLabore;
    const totalSN = das + inss + irrf + patronal;
    const aliquotaFinal = totalSN / faturamento;

    return { das, faixa, aliquotaEfetiva, titulo, faturamento, valor, inss, irrf, patronal, totalSN, aliquotaFinal }
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
    const cppDas = das*0.434;

    const proLabore = calculaProlabore(faturamento, socios, folhaFuncionario, titulo, cppDas);
    const { valor, inss, irrf, patronal } = proLabore;
    const totalSN = das + inss + irrf + patronal;
    const aliquotaFinal = totalSN / faturamento;

    return { das, faixa, aliquotaEfetiva, titulo, faturamento, valor, inss, irrf, patronal, totalSN, aliquotaFinal }
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
    let aliquotaFinal = 0;
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
            aliquotaFinal += aliqLP.pis;
        } else if (nomesImpostos[i] === 'cofins') {
            custoLP.cofins += aliqLP.cofins * faturamento;
            valorLP += custoLP.cofins;
            aliquotaFinal += aliqLP.cofins;
        } else if (nomesImpostos[i] === 'irpj') {
            custoLP.irpj += aliqLP.irpj * faturamento;
            valorLP += custoLP.irpj;
            aliquotaFinal += aliqLP.irpj;
        } else if (nomesImpostos[i] === 'csll') {
            custoLP.csll += aliqLP.csll * faturamento;
            valorLP += custoLP.csll;
            aliquotaFinal += aliqLP.csll;
        } else if (nomesImpostos[i] === 'iss') {
            custoLP.iss += aliqLP.iss * faturamento;
            valorLP += custoLP.iss;
            aliquotaFinal += aliqLP.iss;
        }
    }

    const proLabore = calculaProlabore(faturamento, socios, folhaFuncionario, titulo, 0);
    valorLP += proLabore.inss + proLabore.patronal;
    aliquotaFinal += (proLabore.inss + proLabore.patronal)/faturamento;
    const { valor, inss, irrf, patronal } = proLabore;
    
    return { aliqLP, custoLP, valorLP, aliquotaFinal, titulo, valor, inss, irrf, patronal, faturamento }
}

const calculaAutonomo = (faturamentoInput, exterior, inputIss, titulo) => {
    let faturamento = Number(faturamentoInput);
    let inssAut = faturamento * 0.11;
    if (inssAut > 825.82) {
        inssAut = 825.82;
    }
    let baseIr = faturamento - inssAut;
    let irrfAut = calculaIRRF(baseIr);
    let cppAut = faturamento * 0.2;
    let issAut = faturamento * (inputIss/100);
    if (exterior) {
        issAut = 0;
    }
    let proLabore = { };
    let totalAut = inssAut + irrfAut + cppAut + issAut;
    let pagoEmpregador =faturamento + cppAut;

    let aliquotaFinal = totalAut / faturamento;
    
    return {faturamento, inssAut, irrfAut, cppAut, issAut, proLabore, titulo, aliquotaFinal, totalAut, pagoEmpregador};
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
    if (dados.autonomo) {
        const titulo = 'autonomo';
        const resultadoAutonomo = calculaAutonomo(dados.faturamento, dados.exterior, dados.iss, titulo);
        respostas.push(resultadoAutonomo)
    }
    if(dados.folha) {
        const titulo = 'folha';
        const resultadoFolha = calculaFolha(dados, titulo);
        respostas.push(resultadoFolha)
    } 

    return respostas;
}

const verificaVencedor = (respostas) => {
    let melhorOp = '';

    for(let i = 0, melhor = 100, vencedor; i<respostas.length; i++) {
        if (respostas[i].aliquotaFinal < melhor) {
            melhor = respostas[i].aliquotaFinal;
            vencedor = respostas[i].titulo;
        }
        melhorOp = vencedor;
    }

    return melhorOp;
}

const calculaInssClt = (salario) => {
    
    let inss = 0;
    
    if(salario < 1302) {
        
    } else if (salario === 1302) {
        inss = 1302*0.075;
    } else if (salario > 1302 && salario <= 2571.29) {
        inss = 1302*0.075;
        inss += (salario-1302)*0.09;
    } else if (salario > 2571.29 && salario <= 3856.94) {
        inss = 1302*0.075;
        inss += (2571.29-1302)*0.09;
        inss += (salario - 2571.29)*0.12;
    } else if (salario > 3856.95 && salario <= 7507.49) {
        inss = 1302*0.075;
        inss += (2571.29-1302)*0.09;
        inss += (3856.95 - 2571.29)*0.12;
        inss += (salario - 3856.95)*0.14;
    } else {
        inss = 877.24;
    }

    inss = parseFloat(inss.toFixed(2));

    return inss;
}

const calculaPJ = (faturamento, anexos, exterior) => {
    const faixa = verificaFaixa(faturamento);
    let titulo;
    if (anexos === 3) {
        titulo = 'anexoIII';
    } else if (anexos === 4) {
        titulo = 'anexoIV';
    } else if (anexos === 5) {
        titulo = 'anexoV';
    }

    const anexo = ALIQUOTAS.find((item, index) => {
        return item.title === titulo;
    });

    const aliquotas = anexo.items.find((item, index) => {
        return item.nome === faixa;
    });

    const aliquotaEfetiva = calculaAliquotaEfetiva(faturamento, aliquotas.aliquota, aliquotas.deducao, aliquotas.percentualExterior, exterior);

    const das = aliquotaEfetiva * faturamento;

    return { das, faixa, aliquotaEfetiva, titulo }

}
 
const calculaFolha = (dados, titulo) => {
    const { beneficios, planoSaude, valeAlimentacao, valeTransporte } = dados;
    const anexo = 3; //dados.atividade;
    const salario = Number(dados.salario);
    
    const salarioFerias = salario * 1.3;

    const inssClt = calculaInssClt(salario);
    let irrfClt = calculaIRRF(salario - inssClt);
    if (irrfClt <= 10) {
        irrfClt = 0;
    }
    const fgts = salario * 0.08;
    const salarioLiquido = salario - inssClt - irrfClt;

    const decTerceiroProp = salarioLiquido / 12;
    const feriasProp =
        (salarioFerias -
            calculaInssClt(salarioFerias) -
            calculaIRRF(salarioFerias)) /
        12;
    const fgtsExtras = (salarioFerias + salario) * 0.08;

    const totalBeneficios =
        Number(planoSaude) +
        Number(valeAlimentacao) +
        Number(valeTransporte) +
        Number(beneficios);
    const remuneracaoLiq =
        salarioLiquido +
        fgts +
        decTerceiroProp +
        totalBeneficios +
        feriasProp;

    const folha = {
        inssClt,
        irrfClt,
        fgts,
        titulo,
        salario,
        salarioLiquido,
        beneficios,
        planoSaude,
        valeAlimentacao,
        valeTransporte,
        decTerceiroProp,
        remuneracaoLiq,
        feriasProp,
        fgtsExtras,
        totalBeneficios
    };

    return folha;
};



export const CalculoContext = createContext({
    pegaInputECalcula: () => { },
    isCardShown: false,
    setCardShown: () => { },
    setVencedor: () => { }

});


export const CalculoProvider = ({ children }) => {

    const [isCardShown, setCardShown] = useState(false);
    const [resultados, setResultados] = useState([]);
    const [scroll, setScroll] = useState(false);
    const [vencedor, setVencedor] = useState([]);

    const pegaInputECalcula = (dados) => {
        setCardShown(true);
        const output = gerenciaCalculo(dados);
        setResultados(output);
        const vencedor = verificaVencedor(output)
        setVencedor(vencedor);

        return;
    }


    const value = { pegaInputECalcula, isCardShown, setCardShown, resultados, scroll, setScroll , vencedor}

    return (
        <CalculoContext.Provider value={value}>{children}</CalculoContext.Provider>
    )

}