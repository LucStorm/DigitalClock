const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

function updateClock() {
  let dateNow = new Date()
  let h = dateNow.getHours()
  let m = dateNow.getMinutes()
  let s = dateNow.getSeconds()

  horas.textContent = h < 10 ? '0' + h : h
  minutos.textContent = m < 10 ? '0' + m : m
  segundos.textContent = s < 10 ? '0' + s : s
}
updateClock()
const result = setInterval(updateClock, 1000)
