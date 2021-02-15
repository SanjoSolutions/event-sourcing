export class Grid2D {
  constructor(width, height) {
    this.width = width
    this.height = height
    this._values = new Array(width * height)
  }

  get({x, y}) {
    return this._values[this._calculateIndex({x, y})]
  }

  set({x, y}, value) {
    this._values[this._calculateIndex({x, y})] = value
  }

  _calculateIndex({x, y}) {
    return y * this.width + x
  }

  * positions() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        yield {x, y}
      }
    }
  }
}
