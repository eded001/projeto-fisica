function HoraDoMomento() {
    var agora = new Date, hora = agora.getHours()
    var horaDoDia = document.querySelector('#hora-do-dvar BotaoReceberNome = document.querySelector('#botao-nome')

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
    }ia')
    var momentoDoDia = document.querySelector('#momento-do-dia')

    if (hora >= 0 && hora < 12) {
        horaDoDia.innerHTML = 'bom dia'
        momentoDoDia.innerHTML = 'bela manhã'
    } else if (hora >= 12 && hora < 18) {
        horaDoDia.innerHTML = 'boa tarde'
        momentoDoDia.innerHTML = 'linda tarde'
    } else {
        horaDoDia.innerHTML = 'boa noite'
        momentoDoDia.innerHTML = 'bela noite'
    }
}