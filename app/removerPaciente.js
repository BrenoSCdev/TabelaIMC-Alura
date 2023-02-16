const tabela = document.querySelector("table");

tabela.addEventListener("dblclick",(event) => {

    event.target.parentNode.classList.add("fadeOut")
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 400)


})




/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
    this.remove();
    })
})*/