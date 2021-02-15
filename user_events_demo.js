import { EventStorage } from './EventStorage.js'
import { createHeatMapCanvasFromEvents } from './heat_map_canvas.js'

const eventStorage = new EventStorage()
window.eventStorage = eventStorage

const container = document.getElementById('container')

window.addEventListener('mousemove', function (event) {
  eventStorage.add(event)
})

function plot() {
  const events = eventStorage.get()
  const canvas = createHeatMapCanvasFromEvents(events)
  container.innerHTML = ''
  container.appendChild(canvas)
}

window.plot = plot
