const botaoAdcionar = document.querySelector("#buscar-paciente");
botaoAdcionar.addEventListener("click",function(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente => {
                adicionaPaciente(paciente);
            });
            }else{
                var erroAjax = document.querySelector("#erro-ajax")
                erroAjax.classList.remove("invisivel")
            }
        
    });
    xhr.send();
})