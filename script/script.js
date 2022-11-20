var BotaoNaoResponder = document.querySelector('#nao-responder')
var BotaoResponder = document.querySelector('#responder')
var BotaoContinuar = document.querySelector('#responder-continuar')
var BotaoRecarregar = document.querySelector('#responder-recarregar')

BotaoNaoResponder.addEventListener('click', NaoResponder)
BotaoResponder.addEventListener('click', Responder)
BotaoContinuar.addEventListener('click', Continuar)
BotaoRecarregar.addEventListener('click', Recarregar)

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
    var resposta = document.querySelector('#resposta')
    var pergunta = document.querySelector('#pergunta')
    var titulo = document.querySelector('#titulo')

    if (nomeDoSujeito.value == '') {
        resposta.style.display = 'block'
        resposta.innerHTML = 'Por favor, preencha o campo corretamente!! <b>Recarregue para tentar outra vez</b>'
        resposta.style.color ='#ff6347'
        BotaoRecarregar.style.display = 'block'
        BotaoRecarregar.style.backgroundColor = '#4682b4'
        BotaoNaoResponder.value = 'Continuo não querendo responder >:('
        pergunta.style.display = 'none'
        nomeDoSujeito.style.display = 'none'
        BotaoResponder.style.display = 'none'

    } else {
        var espacoDeInteracao = document.querySelector('.centro')
        var nomeResposta = document.querySelector('#nome')
        
        var secao = document.querySelector('#secao')

        resposta.style.display = 'block'
        nomeResposta.innerHTML = nomeDoSujeito.value // input
        nomeResposta.style.textTransform = 'capitalize'
        pergunta.style.display = 'none'
        nomeDoSujeito.style.display = 'none'
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

function Recarregar() {document.location.reload(true)} // recarregar página