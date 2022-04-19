/* Transições páginas Elsa*/

function irPag2Elsa() {
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b") {
        if (tentativa == 0) {
            return location = './gameoverAnna.html'
        } else {
            alert(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa--;
    }
    if (escolha.toLowerCase() == "b") {
        return location = './pagElsa2.html'
    } else {
        return location = './gameoverpag1Elsa.html'
    }
}

function irPag3Elsa() {
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b") {
        if (tentativa == 0) {
            return location = './gameoverAnna.html'
        } else {
            alert(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa--;
    }
    if (escolha.toLowerCase() == "b") {
        return location = './pagElsa3.html'
    } else {
        return location = './gameoverpag2Elsa.html'
    }
}

function irPagFinalElsa() {
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b") {
        if (tentativa == 0) {
            return location = './gameoverAnna.html'
        } else {
            alert(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa--;
    }
    if (escolha.toLowerCase() == "b") {
        return location = './pagVitoriaElsa.html'
    } else {
        return location = './gameover3Elsa.html'
    }
}

/* Transições páginas Anna*/
function irPag2Anna() {
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b") {
        if (tentativa == 0) {
            return location = './gameoverAnna.html'
        } else {
            alert(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa--;
    }
    if (escolha.toLowerCase() == "a") {
        return location = './pagAnna2.html'
    } else {
        return location = './gameoverpag1Anna.html'
    }
}
function irPag3Anna() {
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b") {
        if (tentativa == 0) {
            return location = './gameoverAnna.html'
        } else {
            alert(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa--;
    }
    if (escolha.toLowerCase() == "b") {
        return location = './pagAnna3.html'
    } else {
        return location = './gameoverpag2Anna.html'
    }
}
function irPagFinalAnna() {
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b") {
        if (tentativa == 0) {
            return location = './gameoverAnna.html'
        } else {
            alert(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa--;
    }
    if (escolha.toLowerCase() == "a") {
        return location = './pagVitoriaAnna.html'
    } else {
        return location = './gameoverpag3Anna.html'
    }
}

/* Transições páginas Kristoff*/
function irPag2Kristoff() {
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b") {
        if (tentativa == 0) {
            return location = './gameoverKristoff.html'
        } else {
            alert(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa--;
    }
    if (escolha.toLowerCase() == "b") {
        return location = './pagKristoff2.html'
    } else {
        return location = './gameoverpag1Kris.html'
    }
}

function irPag3Kristoff() {
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b") {
        if (tentativa == 0) {
            return location = './gameoverKristoff.html'
        } else {
            alert(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa--;
    }
    if (escolha.toLowerCase() == "b") {
        return location = './pagKristoff3.html'
    } else {
        return location = './gameoverpag2Kris.html'
    }
}

function irPagFinalKristoff() {
    var escolha = prompt('Qual a sua escolha?')
    var tentativa = 1
    while (escolha.toLowerCase() != "a" && escolha.toLowerCase() != "b") {
        if (tentativa == 0) {
            return location = './gameoverKristoff.html'
        } else {
            alert(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            escolha = prompt('Qual a sua escolha?')
        }
        tentativa--;
    }
    if (escolha.toLowerCase() == "b") {
        return location = './pagVitoriaKris.html'
    } else {
        return location = './gameoverpag3Kris.html'
    }
}