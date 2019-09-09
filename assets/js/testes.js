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

var apertar = document.querySelector("#btn3");

function apertarHandler() {
    alert("Clicado //handler");
}

apertar.onclick = apertarHandler;

//evento disparado
var aperte = document.querySelector("#btn4");

function aperteHandler() {
    alert("Primeiro evento");
}

function outroHandler() {
    alert("Segundo evento");
}

aperte.addEventListener("click", aperteHandler);
aperte.addEventListener("click", outroHandler);