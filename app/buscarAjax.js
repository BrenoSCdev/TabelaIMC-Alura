const botaoAdcionarAjax = document.getElementById("buscar-paciente");
botaoAdcionarAjax.addEventListener("click",() => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    xhr.addEventListener("load", () => {

        if(xhr.status == 200){
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente => {
                adicionaPaciente(paciente);
            });
            }else{
                let erroAjax = document.getElementById("erro-ajax")
                erroAjax.classList.remove("invisivel")
            }
        
    });
    xhr.send();
})