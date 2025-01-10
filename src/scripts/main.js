


const aniversario = new Date('Jan 22, 2025 00:00:01')
const timeStampAniversario = aniversario.getTime()

const contador = setInterval(function() {
    const agora = new Date()
    const timeStampAgora = agora.getTime()  

    const distanciaAteAniversário = timeStampAniversario - timeStampAgora

    const diasEMms = 1000 * 60 * 60 * 24
    const horasEMms = 1000 * 60 * 60
    const minutosEMms = 1000 * 60

    const diasAteAniversario = Math.floor(distanciaAteAniversário / diasEMms)
    const horasAteAniversario = Math.floor((distanciaAteAniversário % diasEMms) / horasEMms)
    const minutosAteAniversario = Math.floor((distanciaAteAniversário % horasEMms) / minutosEMms)
    const segundosAteAniversario = Math.floor((distanciaAteAniversário % minutosEMms) / 1000)

    document.getElementById('data').innerHTML = `|
    ${diasAteAniversario} - Dias |
    ${horasAteAniversario} - Horas |
    ${minutosAteAniversario} - Minutos |
    ${segundosAteAniversario} - Segundos |`

    if(timeStampAniversario <= timeStampAgora) {
        document.getElementById('data').innerHTML = 'É SEU ANIVERSÁRIO, PARABÉNS!'
        document.querySelector('.text').innerHTML = ' '
        document.querySelector('.title').innerHTML = ' '
    }
}, 1000)