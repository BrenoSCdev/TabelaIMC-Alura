var botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); //Extraindo informações do paciente do form
    
    var paciente = obtemPacienteForm(form);



    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    adicionaPaciente(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
   
    

});

function adicionaPaciente(paciente){
    var pacienteTR = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);
}

function obtemPacienteForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTR;
}
    
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome == 0){
        erros.push("Nome não identificado")
    }

    if(paciente.peso == 0){
        erros.push("Peso não identificado")
    }

    if(paciente.altura == 0){
        erros.push("Altura não identificado")
    }

    if(paciente.gordura == 0){
        erros.push("Gordura não identificado")
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido") 
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválido")
    }

    return erros;


}


function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}