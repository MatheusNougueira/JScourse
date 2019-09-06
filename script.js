//textContent propriedade que acessa o conteúdo textual
var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "UVA";

var titulo2 = document.querySelector(".titulo2");
titulo2.textContent = "OIIII";

//adicionamento o valor selecionado (document vai selecionar o elemento que possui o "id") à var paciente
var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    } else {
        paciente.classList.add("paciente-valido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    } else {
        paciente.classList.add("paciente-valido");
    }
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
    alert("Fui clicado");
}

titulo.addEventListener("click", function () {
    console.log("Função anônima")
});

var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar);

botaoAdicionar.addEventListener("click", function () {
    alert("Paciente adicionado!")
});

//função anônima
var click = document.querySelector("#btn");

click.addEventListener("click", function () {
    alert("Opção com função anônima")
});

//passando função como parâmetro
var apert = document.querySelector("#btn2");

function apertBtn() {
    alert("Passando função como parâmetro");
}

apert.addEventListener("click", apertBtn);

var botaoAdiciona = document.querySelector("#adicionar-paciente");
botaoAdiciona.addEventListener("click", function (envent) {
    event.preventDefault();

    //trazendo o id do form para o html
    var form = document.querySelector("#form-adiciona");

    //trazendo as propriedades
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //trazendo as linhas (tr)
    var pacienteTr = document.createElement("tr");

    //trazendo os dados (td)
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //acessando o conteúdo textual dos dados
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //adicionando um elemento filho para os dados como parâmetro
    //adicionando cada linha (tr) dentro dos dados (td)
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //trazendo a tabela
    var tabela = document.querySelector("#tabela-pacientes");

    //adicionando os dados na tabela como filha
    //passando os parâmetros a ser adicionada na tabela
    tabela.appendChild(pacienteTr);
});