const timer = document.getElementById('clock')

function updateClock() {
  let n  = new Date(),
    hh = n.getHours(),
    mm = n.getMinutes(),
    ss = n.getSeconds()

  timer.textContent = `${hh} ${mm} ${ss}`

  setTimeout(updateClock, 1000)
}

updateClock()