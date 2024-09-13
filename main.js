// 1) Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!");

// 2) Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numeroUm = 8;
let numeroDois = 2;

console.log("O resultado da soma das variáveis é: " + (numeroUm + numeroDois) + ".");

// 3) Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let variavelDesconhecida = 'teste';

if((typeof variavelDesconhecida) == "Number"){
    console.log("É um número!");
} else {
    console.log("Xiiii... não é um número!");
}

// 4) Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

if((typeof variavelDesconhecida) == "String"){
    console.log("É uma string!");
} else {
    console.log("Xiiii... não é um string!");
}

// 5) Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

if((typeof variavelDesconhecida) == "Boolean"){
    console.log("É uma string!");
} else {
    console.log("Xiiii... não é um Boolean!");
}

// 6) Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

console.log("O resultado da subtração das variáveis é: " + (numeroUm - numeroDois) + ".");

// 7) Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

console.log("O resultado da multiplicação das variáveis é: " + (numeroUm * numeroDois) + ".");

// 8) Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

console.log("O resultado da divisão das variáveis é: " + (numeroUm / numeroDois) + ".");

// 9) Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

if(numeroUm % 2 == 0) {
    console.log("É um número par");
} else {
    console.log("Não é um número par");
}

// 10) Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

if(numeroUm % 2 != 0) {
    console.log("É um número ímpar");
} else {
    console.log("Não é um número ímpar");
}