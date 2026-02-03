function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNascimento = document.getElementById('txtano')
    var msgFinal = document.querySelector('div#res')

    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoAtual) {
        window.alert('ERRO, ano incompatível')
    } else {
        var tipoSexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ''
        if (tipoSexo[0].checked) {
            genero = 'Homem'
        } else if (tipoSexo[1].checked) {
            genero = 'Mulher'
        }

        msgFinal.style.textAlign = 'center'
        msgFinal.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }   
}