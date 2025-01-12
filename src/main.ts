import './style.css'

let startTime: DOMHighResTimeStamp = 0

let noiseTable = [
  0,
  0,
  0,
  0,
]

const LERP_UPDATE_TIME = 120

let lerpTable = [
  0,
  0,
  0,
  0,
]

function animate(ts: DOMHighResTimeStamp) {
  if (startTime === 0) { startTime = ts }
  const elapsed = (ts - startTime) / 1000;

  updateNoiseTable(noiseTable)

  if (elapsed >= 1) {
    startTime = ts
    updateLerpTable(lerpTable, noiseTable)
  }

  requestAnimationFrame(animate)
}

function updateNoiseTable(nt: number[]) {
  for (let i = 0; i < nt.length; i += 1) {
    nt[1] = Math.random()
  }
}

function updateLerpTable(lt: number[], nt: number[]) {
  // get current noise table value and slowly lerp torwrs it in lerpTable
}

requestAnimationFrame(animate)
