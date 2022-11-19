var BotaoNaoResponder = document.querySelector('#nao-responder')
var BotaoResponder = document.querySelector('#responder')
var BotaoContinuar = document.querySelector('#responder-continuar')

BotaoNaoResponder.addEventListener('click', NaoResponder)
BotaoResponder.addEventListener('click', Responder)
BotaoContinuar.addEventListener('click', Continuar)

function NaoResponder() {
    var espacoDeInteracao = document.querySelector('.centro')
    var titulo = document.querySelector('#titulo')
    var secao = document.querySelector('#secao')

    espacoDeInteracao.style.display = 'none'
    secao.style.display = 'block'

    titulo.innerHTML = 'Tópicos a serem abordados neste artigo:'
}

function Responder(){
    var nomeDoSujeito = document.querySelector('#nome-do-sujeito')
    var paragrafo = document.querySelector('#resposta')
    var titulo = document.querySelector('#titulo')

    if (nomeDoSujeito.value == '') {
        paragrafo.style.display = 'block'
        paragrafo.innerHTML = 'Por favor, preencha o campo corretamente!! Recarregue para tentar outra vez'
        paragrafo.style.color ='#ff6347'

    } else {
        var espacoDeInteracao = document.querySelector('.centro')
        var nomeResposta = document.querySelector('#nome')
        
        var secao = document.querySelector('#secao')

        paragrafo.style.display = 'block'
        nomeResposta.innerHTML = nomeDoSujeito.value // input
        nomeResposta.style.textTransform = 'capitalize'
        BotaoResponder.style.display = 'none'
        BotaoNaoResponder.style.display = 'none'
        BotaoContinuar.style.display = 'block'
    }
}

function Continuar() {
    var nomeApresentacao = document.querySelector('#nome-apresentacao')
    var nomeDoSujeito = document.querySelector('#nome-do-sujeito')

    nomeApresentacao.innerHTML = nomeDoSujeito.value
    nomeApresentacao.style.textTransform = 'capitalize'

    var espacoDeInteracao = document.querySelector('.centro')
    var titulo = document.querySelector('#titulo')
    var secao = document.querySelector('#secao')

    espacoDeInteracao.style.display = 'none'
    secao.style.display = 'block'
}