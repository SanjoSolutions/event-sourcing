import { Grid2D } from './Grid2D.js'

export function createHeatMap(events) {
  const visitCounts = determineVisitCounts(events)
  const colorIntensities = generateColorIntensities(visitCounts)
  return colorIntensities
}

function determineVisitCounts(events) {
  const width = window.innerWidth
  const height = window.innerHeight
  const visitCounts = new Grid2D(width, height)
  initializeGrid(visitCounts)
  for (const event of events) {
    const coordinates = {x: event.clientX, y: event.clientY}
    visitCounts.set(coordinates, visitCounts.get(coordinates) + 1)
  }
  return visitCounts
}

function initializeGrid(grid) {
  for (const {x, y} of grid.positions()) {
    grid.set({x, y}, 0)
  }
}

function generateColorIntensities(visitCounts) {
  const maxVisitCount = getMaxVisitCount(visitCounts)
  const colorIntensities = new Grid2D(visitCounts.width, visitCounts.height)
  for (const {x, y} of visitCounts.positions()) {
    const colorIntensity = visitCounts.get({x, y}) / maxVisitCount
    colorIntensities.set({x, y}, colorIntensity)
  }
  return colorIntensities
}

function getMaxVisitCount(visitCounts) {
  return getMax(visitCounts)
}

function getMax(grid) {
  let max = null
  for (const {x, y} of grid.positions()) {
    const value = grid.get({x, y})
    if (value > max || max === null) {
      max = value
    }
  }
  return max
}
