function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    let msgFinal = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        msgFinal.innerHTML = "Não é possível contar"
    } else {
        msgFinal.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f) {
            for(let c = i; c <= f; c += p) {
               msgFinal.innerHTML += ` - ${c}` 
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                msgFinal.innerHTML += ` - ${c} `
            }
        }
        msgFinal.innerHTML += ' - FIM '
    }
}