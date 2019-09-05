//textContent propriedade que acessa o conteúdo textual
var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "UVA";

var titulo2 = document.querySelector(".titulo2");
titulo2.textContent = "OIIII";

//adicionamento o valor selecionado (document vai selecionar o elemento que possui o "id") à var paciente
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido")
    pesoEhValido = false;
}
if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida")
    alturaEhValida = false;
}

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(tdAltura);
console.log(altura);

var tdImc = document.querySelector(".info-imc");

var imc = peso / (altura * altura); //divide o peso pelo resultado da multiplicação

tdImc.textContent = imc;

console.log(imc);
