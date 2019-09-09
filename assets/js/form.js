var botaoAdiciona = document.querySelector("#adicionar-paciente");
botaoAdiciona.addEventListener("click", function (envent) {
    event.preventDefault();

    //trazendo o id do form para o html
    var form = document.querySelector("#form-adiciona");

    //trazendo as propriedades
    //extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //cria a td do paciente
    var pacienteTr = montaTr(paciente);

    console.log(paciente);

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    //adicionando os dados na tabela como filha
    //passando os parâmetros a ser adicionada na tabela
    tabela.appendChild(pacienteTr);

    form.reset();
});

var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar);

botaoAdicionar.addEventListener("click", function () {
    alert("Paciente adicionado!")
});

//criando objeto paciente
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    //trazendo as linhas (tr)
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //adicionando um elemento filho para os dados como parâmetro
    //adicionando cada linha (tr) dentro dos dados (td)
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("paciente")

    return td;
}

