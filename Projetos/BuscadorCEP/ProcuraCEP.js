import axios from 'axios';

// Função pra ver se o CEP é válido
export function validarCEP(cep) {
  return /^\d{8}$/.test(cep);
}


// Função pra consultar a API do via CEP
export async function buscaCep(cep) {
    try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(response);
    const data= response.data;

    if(data.erro) {
        console.error("CEP não encontrado");
        process.exit(1);
    }
    console.log("\n 📍Endereço encontrado:");
    console.log(`Logradouro: ${data.logradouro}`);
    console.log(`Bairro:     ${data.bairro}`);
    console.log(`Cidade:     ${data.localidade}`);
    console.log(`Estado:     ${data.uf}`);
    console.log(`CEP:        ${data.cep}`);
    
    } catch (error){
        console.error("❌Erro ao consultar o CEP:", error.message);
        process.exit(1);
    }

}



