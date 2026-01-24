var agora = new Date();
var diaSem = agora.getDay();
/*
1 - Dom
2 - Seg
3 - Ter
4 - Qua
5 - Qui
6 - Sex
7 - Sab
*/
console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
    default:
        console.log('Erro!')
}