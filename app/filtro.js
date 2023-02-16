const filtro = document.getElementById("filtrar-tabela")
filtro.addEventListener("input", () => {
    if ( filtro.value.length > 0 ){
        for (i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i]
            let tdNome = paciente.querySelector(".info-nome")
            let nome = tdNome.textContent
            let expressao = new RegExp(filtro.value, "i")
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel")
            } else{
                paciente.classList.remove("invisivel")
            }
        }
    }else{
        for (i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }


})

