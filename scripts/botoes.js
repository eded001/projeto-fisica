var BotaoReceberNome = document.querySelector('#botao-nome')

BotaoReceberNome.addEventListener('click', ReceberNome)

function ReceberNome() {
    var nome = document.querySelector('#nome')
    var resp = document.querySelector('#resposta')

    var preIntro = document.querySelector('#pre-intro')

    var header = document.querySelector('#header')
    var main = document.querySelector('#main')

    if (nome.value == '') {
        resp.innerHTML = 'Por favor, preencha o espaço com seu nome!!'
        resp.style.color = 'red'
    } else {
        preIntro.style.display = 'none'

        header.style.display = 'flex'
        main.style.display = 'block'
    }
}