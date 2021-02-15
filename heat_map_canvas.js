import { createHeatMap } from './heat_map.js'

export function createHeatMapCanvas(heatMap) {
  const canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const context = canvas.getContext('2d')

  for (const {x, y} of heatMap.positions()) {
    const alpha = heatMap.get({x, y})
    context.fillStyle = `rgba(255, 0, 0, ${alpha})`
    context.fillRect(x, y, 1, 1)
  }

  return canvas
}

export function createHeatMapCanvasFromEvents(events) {
  const heatMap = createHeatMap(events)
  return createHeatMapCanvas(heatMap)
}
