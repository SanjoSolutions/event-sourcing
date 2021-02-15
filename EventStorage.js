export class EventStorage {
  constructor() {
    this._events = []
  }

  add(event) {
    this._events.push(event)
  }

  get() {
    return this._events
  }
}
