var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//target - alvo

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function () {
        event.target.parentNode.remove();
        alert("Paciente removido.")
    }, 500);

})

// //acessando cada item do array
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         alert("Paciente removido.")

//         this.remove()//quem acionou o evento, atrelado ao paciente, que escuta o evento
//     });//passando evento de DoubleClick
// });
