function getDayWeekText (dayWeek) {
    let DayWeekText;

    switch (diaSemana) {
        case 0:
            DayWeekText = 'Domingo'
            return DayWeekText
        case 1:
            DayWeekText = 'Segunda'
            return DayWeekText
        case 2:
            DayWeekText = 'Terca'
            return DayWeekText
        case 3:
            DayWeekText = 'Quarta'
            return DayWeekText
        case 4:
            DayWeekText = 'Quinta'
            return DayWeekText
        case 5:
            DayWeekText = 'Sexta'
            return DayWeekText
        case 6:
            DayWeekText = 'Sabado'
            return DayWeekText
        default:
            DayWeekText = 'Dia invalido'
            return DayWeekText
    }
}

const data = new Date()
const diaSemana = data.getDay()
const diaSemanaTexto = getDayWeekText(diaSemana)
console.log(diaSemanaTexto)
/*
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break
    case 1:
        diaSemanaTexto = 'Segunda'
        break
    case 2:
        diaSemanaTexto = 'Terca'
        break
    case 3:
        diaSemanaTexto = 'Quarta'
        break
    case 4:
        diaSemanaTexto = 'Quinta'
        break
    case 5:
        diaSemanaTexto = 'Sexta'
        break
    case 6:
        diaSemanaTexto = 'Sabado'
        break
    default:
        diaSemanaTexto = 'Dia invalido'
        break
}*/
