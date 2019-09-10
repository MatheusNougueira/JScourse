/* AJAX - REQUISIÇÕES COM JS ASSÍCRONA, SEM TRAVAR JS E SEM PRECISAR UTILIZAR O NAVEGADOR */

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    //abrindo requisição
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //trazendo requisição
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax")

        //testando o status da requisição
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta)//transformando o JSON em obj JS

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)
            });
        } else {
            erroAjax.classList.remove("invisivel");
            alert("Error 404 Not Found")
        }
    });

    //enviando requisição
    xhr.send();
});