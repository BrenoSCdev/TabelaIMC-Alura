var titulo = document.querySelector("header");
titulo.textContent = "Tabela IMC"; //manipulação do DOM

var pacientes = document.querySelectorAll (".paciente"); //variavel encapsula o valor da classe paciente


    for (var i = 0; i < pacientes.length ; i++){ //loop que itera a cada linha da tabela

        var paciente = pacientes[i]; 

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;
        
        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;
        
        var tdIMC = paciente.querySelector(".info-imc");
        
        var pesoValido = validaPeso(peso);
        var alturaValido = validaAltura(altura);
        
        if(!pesoValido){
        pesoValido = false;
        tdIMC.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
        //paciente.style.color = "red";
        }
        
        if(!alturaValido){
            alturaValido = false;
            tdIMC.textContent = "Altura Invalido";
            paciente.classList.add("paciente-invalido");
        }
        
        if (pesoValido && alturaValido){
            var imc = calculaImc(peso, altura );
            tdIMC.textContent = imc;
        }
    

    }

    function validaPeso(peso){
        if(peso >= 0 && peso < 400){
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(altura){
        if(altura >=0 && altura < 3.0){
            return true;
        } else {
            return false;
        }
    }


    function calculaImc(peso, altura){
        var imc = 0;

        imc = peso / ( altura * altura )

        return imc.toFixed(2);
    }





