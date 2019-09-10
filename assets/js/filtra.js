var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    //se o valor do campo for maior que 0
    if (this.value.length > 0) {
        //iterando sobre cada td do nome
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i")
            //se o nome for diferente acrescenta uma class
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
                //senão, remove a class
            } else {
                paciente.classList.remove("invisivel");
            }
        }
        //se não houver texto no input, remove a class
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }
})

