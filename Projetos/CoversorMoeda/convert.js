#!/usr/bin/env node

const axios = require ('axios');

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Uso: node convert.js <valor> <moeda_origem> <moeda_destino>');
    process.exit(1);
}

const amount = parseFloat(args[0]);
const from = args[1].toUpperCase();
const to = args[2].toUpperCase();

async function convertCurrency() {
    try {
        const url = (`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
        
        const response = await axios.get(url);
        const resultado = response.data;
        console.log('🔎 Resposta da API:');

        if (response.data !== undefined) {
            console.log(`${amount} ${from} = ${resultado.rates[to]} ${to}`);
        }    else {
            console.error('Erro: A resposta da API não contém os dados esperados.');
            console.log(result); // Para debug
     }

    }  catch (error) {
        console.error('Erro na conversão:', error.message);
    }
}


convertCurrency();


