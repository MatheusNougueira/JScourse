var botaoAdiciona = document.querySelector("#adicionar-paciente");
botaoAdiciona.addEventListener("click", function (envent) {
    event.preventDefault();

    //trazendo o id do form para o html
    var form = document.querySelector("#form-adiciona");

    //trazendo as propriedades
    //extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {

        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    //montando paciente
    var pacienteTr = montaTr(paciente);

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    //adicionando os dados na tabela como filha
    //passando os parâmetros a ser adicionada na tabela
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");

        li.textContent = erro;
        ul.appendChild(li);
    });
}

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
    td.classList.add(classe)
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {

    var erros = []

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    // if (!validaAltura(paciente.Altura)) {
    //     erros.push("Altura é inválida");
    // }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco")
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco")
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    return erros;
}