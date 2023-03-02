function meuRelogio() {
    let dateTempo = new Date();
    let hora = dateTempo.getHours();
    let minuto = dateTempo.getMinutes();
    let segundo = dateTempo.getSeconds();

    hora = hora < 10 ? `0${hora}` : hora;
    minuto = minuto < 10 ? `0${minuto}` : minuto;
    segundo = segundo < 10 ? `0${segundo}` : segundo;

    document.getElementById('horas').innerHTML = hora
    document.getElementById('minutos').innerHTML = minuto
    document.getElementById('segundos').innerHTML = segundo
}

setInterval(meuRelogio, 10)