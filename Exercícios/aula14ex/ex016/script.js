function contar() {
    let ini = document.getElementById('txti')
    let end = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || end.value.length == 0 || pas.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar.'
    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(ini.value)
        let f = Number(end.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert ('Passo inválido! Considerando passo 1.')
            p = 1
        }

        //Contagem crescente
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}