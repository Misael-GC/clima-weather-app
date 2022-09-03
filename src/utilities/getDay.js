export const getCurrentDay = (day, add = 0) =>{
    if (day + add > 7) {
        day = (day + add) -7
    }

    switch (day) {
        case 1:
            return 'Lunes'
        case 2:
            return 'Martes'
        case 3:
            return 'Miercoles'
        case 4:
            return 'Jueves'
        case 5:
            return 'Viernes'
        case 6:
            return 'Sabado'
        case 7:
            return 'Domingo'
        default:
            break;
    }
}