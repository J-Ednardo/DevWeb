// (condicao) ? 'expressao 1'  : 'expressao 2'
const pontuacaoUsuario = 1100
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal'
console.log(nivelUsuario)
const corUsuario = 'Rosa';
const corPadrao = corUsuario || 'Preta'
console.log(corPadrao)

/*if (pontuacaoUsuario >= 1000){
    console.log("Usuario Vip")
}else {
    console.log("Usuario Normal")
}*/

