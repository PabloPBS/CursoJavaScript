function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/kidmale.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/teenboy.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/men.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/sir.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/kidfemale.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/teengirl.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/woman.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/madam.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
