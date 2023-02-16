const botaoAdcionar = document.getElementById("adicionar-paciente"); 
botaoAdcionar.addEventListener("click",(event) => {
    event.preventDefault()

    let form = document.getElementById("form-adiciona"); //Extraindo informações do paciente do form
    
    let paciente = obtemPacienteForm(form)



    let erros = validaPaciente(paciente)
    if(erros.length > 0){
        exibeMensagensErro(erros)
        return
    }

    adicionaPaciente(paciente)

    form.reset()

    let mensagensErro = document.getElementById("mensagens-erro")
    mensagensErro.innerHTML = ""
   
    

})

const adicionaPaciente = (paciente) => {
    let pacienteTR = montaTr(paciente)
    let tabela = document.getElementById("tabela-pacientes")
    tabela.appendChild(pacienteTR)
}

const obtemPacienteForm = (form) => {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

const montaTr = (paciente) => {
    let pacienteTR = document.createElement("tr")
    pacienteTR.classList.add("paciente")

    pacienteTR.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTR.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTR.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTR.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTR.appendChild(montaTd(paciente.imc, "info-imc"))
    return pacienteTR
}
    
const montaTd= (dado, classe) => {
    let td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe)
    return td
}

const validaPaciente = (paciente) => {

    let erros = []

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


const exibeMensagensErro= (erros) => {
    let ul = document.getElementById("mensagens-erro")
    ul.innerHTML = ""
    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro
        ul.appendChild(li)
    })
}