function irPag2Elsa (){
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b"){
        if (tentativa == 0){
            return location = './gameover1Elsa.html'
        } else{
            alert (`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa --;
    }
    if (escolha.toLowerCase() == "a") {
        return location = './pagElsa2.html'
    } else {
        return location = './gameover1Elsa.html'
    }
}

function irPag3Elsa (){
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b"){
        if (tentativa == 0){
            return location = './gameover1Elsa.html'
        } else{
            alert (`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa --;
    }
    if (escolha.toLowerCase() == "a") {
        return location = './pagElsa2.html'
    } else {
        return location = './gameover1Elsa.html'
    }
}