let calculo = ''
//let resultado = ''
let inputCheckbox = document.getElementById('liga_desliga_checkbox')
let corpo = document.getElementById('corpo')
let calculadora = document.getElementById('calculadora')

function recebeAlgarismo(num) {
    calculo += num
    document.getElementById('resultado').innerHTML += num

    if (calculo.length > 10) {
        document.getElementById('resultado').style.fontSize = '2em'
        document.getElementById('resultado').style.lineHeight = '106%'
    } else if (calculo.length < 12) {
        document.getElementById('resultado').style.lineHeight = '-10%'
        document.getElementById('resultado').style.fontSize = '3em'
    }
}


function somar() {
    try {
        document.getElementById('resultado').innerHTML = ''
        document.getElementById('resultado').innerHTML = eval(calculo)
        calculo = eval(calculo)
        calculo = calculo.toString()
    } catch {
        document.getElementById('resultado').style.fontSize = '2em'
        document.getElementById('resultado').innerText = 'Expressão invalida'

        setTimeout(function sumir(){
            if(document.getElementById('resultado').innerText = 'Expressão invalida') {
                limpaDisplay()
            }
        },2000)
        calculo = ''
    }

}

function limpaDisplay() {
    calculo = ''
    document.getElementById('resultado').innerHTML = calculo
}

function limpar() {
    calculo = calculo.substring(0, calculo.length-1)
    document.getElementById('resultado').innerHTML = calculo
}

function tema() {
    switch (inputCheckbox.checked) {
        case false:
            corpo.style.backgroundColor = '#0d0d0d';
            calculadora.style.backgroundColor = '#262626'
            break;
        case true:
            corpo.style.backgroundColor = 'white'
            calculadora.style.backgroundColor = '#525756'
    }
}



