//JS EXTERNO
var text = document.getElementById("texto");

//TIPOS DE SAÍDA
text.innerHTML = "<b>Meu primeiro inner HTML</b>";
console.log(text.textContent);
alert("Olá mundo 2");

//VARIÁVEIS - var, let, const
var pote = "bombom"; //var é possível reatribuir valores
if(pote == "bombom"){
    pote = "macarrão";
}else{
    null
}
var pote = "CHUCHU"; // o var permite que eu redeclare uma variável com outro valor, como podemos ver aqui
console.log(pote);

let pessoa = "Gabriel"; //let torna a variável única e nn pode ser redeclarada
//let pessoa = "Jonas" se eu descomentasse essa linha, ia dar erro no console 
pessoa = "João";

const idade = 40;
//idade = 50; isso não é permitido
console.log("O " + pessoa + " tem " + idade + " anos!");

//OPERADORES
//MATEMÁTICOS + - * /
//incremento/decremento ++var ou --var
// valor1 = valor1 + valor2 -> valor1 += valor2

//COMPARAÇÃO == === != !== < > <= >=
var number1 = 8;
var number2 = "8";
console.log(number1 == number2) //== verifica o valor
console.log(number1 === number2) //=== verifica o valor e tipo

//TERNÁRIO
let age = 18;
eleitor = age >= 18? "Pode Votar" : "Não Pode Votar"
console.log(eleitor)


//FUNÇÕES
function soma(n1, n2) {
    return n1 - n2    
}
var a=4, b=2
console.log(soma(a,b))

//OBJETOS
const carro ={
    modelo : "sentra",
    ano: "2024",
    cor: "branco perolado",
    placa: "BZK071",
    buzina: function buzinar(){alert("BIIIIIIIIIIIIIIIIIIII")},
    relatorio:function relatorio(){
        return ("O carro "+ this.modelo + " cor " + this.cor +  " de placa " + this.placa + " é do ano " + this.ano)
    }
}
console.log(carro)
carro.buzina()
console.log(carro.relatorio())

//ARRAYS
const lista = [
    "arroz", "feijão", "batata"
]
lista[7] = "Café";
var item = "tomate";
lista.push(item);
console.log(lista);

//ARRAY X OBJETO
const personarray = ["Gabriel", "Luna", 18]
const personobject = {
    nome: "Gabriel",
    sobrenome: "Luna",
    idade : 18
}
console.log(personarray[personarray.length - 1] === personobject.idade)
personarray.pop();
personarray.shift();
personarray.unshift("Luninhagato")
personarray.splice(1, 0, "Add 1", "Add2")//a partir do indicce 1, delete ninguém e add os 2 elementos
text.innerHTML = personarray.join(" - ");

const person2array = ["Camila", "Luna", 45]
var superlista = personarray.concat(person2array)
alert(superlista.slice(2,5).sort()) //sort - ordem alfabética

var numeros = [10, 15, 50, 80, 900, 901]
function Max(array){
    return Math.max.apply(null, array)
}
function Min(array){
    return Math.min.apply(null, array)
}
console.log(Max(numeros), Min(numeros))

//SETTIMEOUT E SETINTERVAL
function Ativar(){
    
    // document.getElementById("tempo").innerHTML = "Espere 5 segundos... ";   
    // tempo = setTimeout(function(){ //tempo é variável global
    //         document.getElementById("tempo").innerHTML = "Cabô";   
    // }, 5000)  esse dá uma mensagem depois de 5s que voc~e clicar no botão
    document.getElementById("stop").innerHTML = "Parar Contagem"
    tempo = setInterval(() => {
        var cronometro = document.getElementById("tempo");
        soma  = parseInt(cronometro.textContent) + 1;
        cronometro.innerHTML = soma;
    }, 1000);
}

function Desativar(){   
    // clearTimeout(tempo);
    
    if(document.getElementById("stop").textContent === "Parar Contagem"){
        clearInterval(tempo);
        document.getElementById("stop").innerHTML = "Zerar Tempo"
    }else if(document.getElementById("stop").textContent === "Zerar Tempo"){
        document.getElementById("tempo").innerHTML = "0"
    }

}

