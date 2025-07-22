// Crie uma função que recebe um objeto person e retorna um novo objeto, 
// com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

function pessoa(person){
    if (person.idade>=18){
        return "Sim é maior de idade";

    }
}

const person={ nome:"Karine", idade:26};


console.log( "A pessoa é adulta? ", pessoa(person));
