'use strict'

let hour = 0
let minute = 0
let second = 0
let millisecond = 0

let cron

let btn_start = document.getElementById('start')
btn_start.onclick = () => start()
let btn_pause = document.getElementById('pause')
btn_pause.onclick = () => pause()
let btn_reset = document.getElementById('reset')
btn_reset.onclick = () => reset()

function start() {
    pause()
    cron = setInterval(() => {timer()}, 10)
}

function pause() {
    clearInterval(cron)
}

function reset() {
    pause()
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
    document.getElementById('hour').innerText = '00'
    document.getElementById('minute').innerText = '00'
    document.getElementById('second').innerText = '00'
    document.getElementById('millisecond').innerText = '00'
}

function timer() {
    if ((millisecond += 1) == 100) {
        millisecond = 0
        second ++
    }
    if (second == 60) {
        second = 0
        minute ++
    }
    if (minute == 60){
        minute = 0
        hour ++
    }
    document.getElementById('hour').innerText = returnData(hour)
    document.getElementById('minute').innerText = returnData(minute)
    document.getElementById('second').innerText = returnData(second)
    document.getElementById('millisecond').innerText = returnData(millisecond)
}

const returnData = (num) => num < 10 ? `0${num}` : num
