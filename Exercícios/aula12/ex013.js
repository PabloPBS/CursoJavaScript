var agora = new Date
var diaSem = agora.getDay()
var nomeDia

/*
    0 = Domingo
    1 = Segunda
    2 =Terça
    3 = Quarta
    4 =Quinta
    6 = Sexta
    6 = Sábado
*/

console.log(diaSem)

switch (diaSem) {
    case 0:
        nomeDia = 'Domingo'
        break
    case 1:
        nomeDia = 'Segunda'
        break
    case 2:
        nomeDia = 'Terça'
        break
    case 3:
        nomeDia = 'Quarta'
        break
    case 4:
        nomeDia = 'Quinta'
        break
    case 5:
        nomeDia = 'Sexta'
        break
    case 6:
        nomeDia = 'Sábado'
        break
    default:
        nomeDia = '[ERRO] - Dia inválido!'
        break
}

console.log(`Hoje é ${nomeDia}!`)