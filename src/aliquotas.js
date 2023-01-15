const ALIQUOTAS = [
    {
        title: 'anexoIII',
        items: [{
            "nome": "Faixa 1",
            "aliquota": 0.06,
            "deducao": 0,
            "percentualExterior": 0.508333334
        },
        {
            "nome": "Faixa 2",
            "aliquota": 0.112,
            "deducao": 9360,
            "percentualExterior": 0.508333334
        },
        {
            "nome": "Faixa 3",
            "aliquota": 0.135,
            "deducao": 17640,
            "percentualExterior": 0.508333334
        },
        {
            "nome": "Faixa 4",
            "aliquota": 0.16,
            "deducao": 35640,
            "percentualExterior": 0.508333334
        },
        {
            "nome": "Faixa 5",
            "aliquota": 0.21,
            "deducao": 125640,
            "percentualExterior": 0.508333334
        },
        {
            "nome": "Faixa 6",
            "aliquota": 0.33,
            "deducao": 648000,
            "percentualExterior": 0.508333334
        }],
    },
    {
        title: 'anexoIV',
        items: [
            {
                "nome": "Faixa 1",
                "aliquota": 0.045,
                "deducao": 0,
                "percentualExterior": 0.34
            },
            {
                "nome": "Faixa 2",
                "aliquota": 0.09,
                "deducao": 8100,
                "percentualExterior": 0.35
            },
            {
                "nome": "Faixa 3",
                "aliquota": 0.102,
                "deducao": 12420,
                "percentualExterior": 0.36
            },
            {
                "nome": "Faixa 4",
                "aliquota": 0.14,
                "deducao": 39780,
                "percentualExterior": 0.37
            },
            {
                "nome": "Faixa 5",
                "aliquota": 0.22,
                "deducao": 183780,
                "percentualExterior": 0.38
            },
            {
                "nome": "Faixa 6",
                "aliquota": 0.33,
                "deducao": 828000,
                "percentualExterior": 0.39
            }],
    },
    {
        title: 'anexoV',
        items: [
            {
                "nome": "Faixa 1",
                "aliquota": 0.155,
                "deducao": 0,
                "percentualExterior": 0.6885
            },
            {
                "nome": "Faixa 2",
                "aliquota": 0.18,
                "deducao": 4500,
                "percentualExterior": 0.6585
            },
            {
                "nome": "Faixa 3",
                "aliquota": 0.195,
                "deducao": 9900,
                "percentualExterior": 0.6285
            },
            {
                "nome": "Faixa 4",
                "aliquota": 0.205,
                "deducao": 17100,
                "percentualExterior": 0.5985
            },
            {
                "nome": "Faixa 5",
                "aliquota": 0.23,
                "deducao": 62100,
                "percentualExterior": 0.5935
            },
            {
                "nome": "Faixa 6",
                "aliquota": 0.305,
                "deducao": 540000,
                "percentualExterior": 0.5935
            }]

    },
    {
        title: 'lucroPresumidoNac',
        items: [
            {
                pis: 0.0065,
                cofins: 0.03,
                irpj: 0.048,
                csll: 0.0288,
            }
        ]
    },
    {
        title: 'lucroPresumidoExt',
        items: [
            {
                pis: 0,
                cofins: 0,
                irpj: 0.048,
                csll: 0.0288,
                iss: 0,
            }
        ]
    }
];

export default ALIQUOTAS;