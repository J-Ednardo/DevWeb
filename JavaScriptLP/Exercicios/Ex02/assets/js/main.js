function getDayWeekText(dayWeek) {
    let dayWeekText

    switch (dayWeek) {
        case 0:
            dayWeekText = 'domingo'
            return dayWeekText
        case 1:
            dayWeekText = 'segunda-feira'
            return dayWeekText
        case 2:
            dayWeekText = 'terça-feira'
            return dayWeekText
        case 3:
            dayWeekText = 'quarta-feira'
            return dayWeekText
        case 4:
            dayWeekText = 'quinta-feira'
            return dayWeekText
        case 5:
            dayWeekText = 'sexta-feira'
            return dayWeekText
        case 6:
            dayWeekText = 'sábado'
            return dayWeekText
        default:
            dayWeekText = 'Dia invalido'
            return dayWeekText
    }
}

function getMonthText(month) {
    let monthText

    switch (month) {
        case 0:
            monthText = 'janeiro'
            return monthText
        case 1:
            monthText = 'fevereiro'
            return monthText
        case 2:
            monthText = 'março'
            return monthText
        case 3:
            monthText = 'abril'
            return monthText
        case 4:
            monthText = 'maio'
            return monthText
        case 5:
            monthText = 'junho'
            return monthText
        case 6:
            monthText = 'julho'
            return monthText
        case 7:
            monthText = 'agosto'
            return monthText
        case 8:
            monthText = 'setembro'
            return monthText
        case 9:
            monthText = 'outubro'
            return monthText
        case 10:
            monthText = 'novembro'
            return monthText
        case 11:
            monthText = 'dezembro'
            return monthText
        default:
            monthText = 'mes invalido'
            return monthText
    }
}

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`
}

function createsDate(date) {
    const dayWeek = date.getDay()
    const dayWeekText = getDayWeekText(dayWeek)
    const numDay = date.getDate()
    const numMonth = date.getMonth()
    const monthText = getMonthText(numMonth)
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes()

    return `${dayWeekText}, ${numDay} de ${monthText} de ${year} ${zeroLeft(hour)}:${zeroLeft(minutes)}`
}

const horario = document.getElementById("horario")
const data = new Date()
horario.innerHTML = createsDate(data)

/* 
const h1 = documento.getElementById("horario")
const data = new Date()
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short',
}

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes)
*/
