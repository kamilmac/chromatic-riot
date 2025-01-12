const LERP_UPDATE_TIME = 512

let startTime: DOMHighResTimeStamp = 0

let noiseTable = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
]


let lerpTable = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
]

let lerpTarget = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
]

function animate(ts: DOMHighResTimeStamp) {
  if (startTime === 0) { startTime = ts }
  const elapsed = (ts - startTime) / LERP_UPDATE_TIME;

  updateNoiseTable(noiseTable)

  if (elapsed >= 1) {
    startTime = ts
    lerpTarget = [...noiseTable]
  }
  updateLerpTable(lerpTable, lerpTarget)

  requestAnimationFrame(animate)
}

function updateNoiseTable(nt: number[]) {
  for (let i = 0; i < nt.length; i += 1) {
    nt[i] = Math.random()
  }
}

function updateLerpTable(lt: number[], nt: number[]) {
  const lerpFactor = 0.01 // Controls how quickly values interpolate
  for (let i = 0; i < lt.length; i += 1) {
    lt[i] = lt[i] + (nt[i] - lt[i]) * lerpFactor
  }
}

export function initStore() {
  requestAnimationFrame(animate)
  return {
    noiseTable,
    lerpTable,
  }
}
