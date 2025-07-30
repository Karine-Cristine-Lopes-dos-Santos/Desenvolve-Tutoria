// Importando a função que procura o CEP
import { buscaCep } from  './ProcuraCEP.js';

// Importando a função de validar CEP
import { validarCEP } from './ProcuraCEP.js';

function main() {
    const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.error("Us: node index.js <CEP>");
    process.exit(1);
  }

  const cep = args[0];

  if (!validarCEP(cep)) {
    console.error("❌ CEP inválido. Deve conter exatamente 8 dígitos numéricos.");
    process.exit(1);
  }

  buscaCep(cep);
}

main();


