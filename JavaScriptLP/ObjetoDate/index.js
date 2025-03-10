function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const minutos = zeroAEsquerda(data.getMinutes())
    const seconds = zeroAEsquerda(data.getSeconds())
    
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${seconds} `
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)

//const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras - umDia) // 01/01/1970 Timestamp unix
//

/*const data = new Date()
console.log('Dia', data.getDate())
console.log('Mes', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - domingo, 6 - sabado
console.log(data.toString())*/
