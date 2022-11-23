var BotaoNaoResponder = document.querySelector('#nao-responder')
var BotaoResponder = document.querySelector('#responder')
var BotaoContinuar = document.querySelector('#responder-continuar')
var BotaoRecarregar = document.querySelector('#responder-recarregar')
var BotaoLista = document.querySelector('#lista-fontes')

BotaoNaoResponder.addEventListener('click', NaoResponder)
BotaoResponder.addEventListener('click', Responder)
BotaoContinuar.addEventListener('click', Continuar)
BotaoRecarregar.addEventListener('click', Recarregar)
BotaoLista.addEventListener('click', MostrarOuEsconderLista)

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
        resposta.innerHTML = 'Talvez você tenha apertado o botão de responder sem querer, <span id="azul">recarregue para tentar outra vez</span>'
        resposta.style.color ='#ff6347'
        BotaoRecarregar.style.display = 'block'
        BotaoNaoResponder.value = 'Nem queria responder D:<'
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

function Recarregar() {document.location.reload(true)} // recarrega a página

function MostrarOuEsconderLista() {
    var lista = document.querySelector('#lista')
    var simbolo = document.querySelector('.material-symbols-outlined')

    if(lista.style.display == 'block') {
        lista.style.display = 'none'
        simbolo.innerHTML = 'arrow_right'
    } else {
        lista.style.display = 'block'
        simbolo.innerHTML = 'arrow_drop_down'
    }
}