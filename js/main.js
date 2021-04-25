function clicou () {
    //injeta um texto dentro do elemento que tem o id agradecimento:
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar!</b>"
}

function redirecionar(){
    // abre uma nova aba do navegador com o site abaixo:
    window.open("https://rocketseat.com.br/");
    // abre o site na mesma página:
    //window.location.href = "https://rocketseat.com.br/";
}

function trocar (elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
    
}

function voltar (elemento){
    elemento.innerHTML = "Passe o mouse aqui...";
    
}

function load() {
    console.log("Página Carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
// Comandos básicos:

//alert('Meu primeiro JS');
//console.log("Aqui é código que não aparece pra o usuário.")

//var frase = "Japão é o melhor time do mundo!";

// replace: método que faz substituições:
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));

// transforma tudo que estiver na variável frase em Maiúsculo:
//console.log(frase.toUpperCase());

// transforma tudo que estiver na variável frase em Minúsculo:
//console.log(frase.toLocaleLowerCase());

//----------------------------------------------------------------------------------

// Array:

/*
var lista = ["maçã", "pêra", "laranja"];
// insere um elemento na ultima posição do vetor:
lista.push("uva");

// retira o último elemento do vetor:
lista.pop();

console.log(lista);

// imprime o tamanho do vetor:
console.log(lista.length);

// imprime o vetor do final pra o início:
console.log(lista.reverse());

// imprime o array pra string:
console.log(lista.toString());

// join para formatar o que for impresso:
console.log(lista.join(" - "));


console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
*/

//----------------------------------------------------------------------------------

// Dicionário: é como se fosse um objeto Json.
/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);

console.log(frutas[0].nome);
console.log(frutas[1].nome);
*/




/* 
var fruta = {nome: "maça", cor:"vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
*/

//----------------------------------------------------------------------------------

// Condicionais, Laços de Repetição e Date:

/*
var idade = prompt("Informe sua idade:");

if (idade >= 18){
    alert("Maior de Idade.")
}
else{
    alert("Menor de Idade.")
}
*/

/*
// Laço de Repetição While:

//inicializando a variável:
var count = 0;

while (count <= 5){
    console.log(count);

    count++; //incrementando
}
*/

// Laço de Repetição For:
/*var cont;

for (cont= 1; cont <=5; cont++){
    alert(cont);
}
alert("Fim da Contagem!");
*/

// Data:
/*
// criando um objeto do tipo Date:
var d = new Date();

// traz a hora e a data atual:
alert(d);

// traz o mês atual. o +1 é pq o método conta inclindo o zero.
alert(d.getMonth() + 1);

// traz a data do dia: 21 por exemplo.
alert(d.getDate());

// traz o número do dia da semana: 3 por exemplo.
alert(d.getDay());

// traz somente a hora:
alert(d.getHours());
*/

//----------------------------------------------------------------------------------

// Funções:

/*
function soma (n1, n2){
    return n1 + n2;

}

alert(soma(2,5)); */

/*
var validar;

function validaIdade(idade){
    if (idade >=18){
        console.log("Maior de Idade.")
    }
    else {
        console.log("Menor de Idade.")
    }
    return validar;
}

var idade = prompt("Informe sua idade: ");
validaIdade(idade); */