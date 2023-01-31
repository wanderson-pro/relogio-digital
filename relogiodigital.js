function meuRelogio() {
    let dateTempo = new Date()
    let hora = dateTempo.getHours()
    let minuto = dateTempo.getMinutes()
    let segundo = dateTempo.getSeconds()

    if (hora < 10) {
        hora = '0' + hora
    }

    if (minuto < 10) {
        minuto = '0' + minuto
    }

    if (segundo < 10) {
        segundo = '0' + segundo
    }
    document.getElementById('horas').innerHTML = hora
    document.getElementById('minutos').innerHTML = minuto
    document.getElementById('segundos').innerHTML = segundo
}

setInterval(meuRelogio, 10)