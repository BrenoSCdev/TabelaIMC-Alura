const titulo = document.querySelector("header")
titulo.textContent = "Tabela IMC" //manipulação do DOM

const validaPeso = (peso) => {
    if(peso >= 0 && peso < 400){
        return true
    } else {
        return false
    }
}

const validaAltura = (altura) => {
    if(altura >=0 && altura < 3.0){
        return true;
    } else {
        return false;
    }
}

const calculaImc = (peso, altura) => {
    let imc = 0;

    imc = peso / ( altura * altura )

    return imc.toFixed(2);
}

const pacientes = document.querySelectorAll (".paciente")//variavel encapsula o valor da classe paciente


    for (i = 0; i < pacientes.length ; i++){ //loop que itera a cada linha da tabela

        let paciente = pacientes[i]; 

        let tdPeso = paciente.querySelector(".info-peso")
        let peso = tdPeso.textContent
        
        let tdAltura = paciente.querySelector(".info-altura")
        let altura = tdAltura.textContent
        
        let tdIMC = paciente.querySelector(".info-imc")
        
        let pesoValido = validaPeso(peso)
        let alturaValido = validaAltura(altura)
        
        if(!pesoValido){
        pesoValido = false
        tdIMC.textContent = "Peso Invalido"
        paciente.classList.add("paciente-invalido")
        //paciente.style.color = "red";
        }
        
        if(!alturaValido){
            alturaValido = false;
            tdIMC.textContent = "Altura Invalido"
            paciente.classList.add("paciente-invalido")
        }
        
        if (pesoValido && alturaValido){
            let imc = calculaImc(peso, altura )
            tdIMC.textContent = imc
        }
    

    }




