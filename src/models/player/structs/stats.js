module.exports = class Stats {
  set damage(damage) {
    this._damage = damage;
  }

  set tearDelay(tearDelay) {
    this._tearDelay = tearDelay;
  }

  set range(range) {
    this._range = range;
  }

  get damage() {
    return this._damage;
  }

  get tearDelay() {
    return this._tearDelay;
  }

  get range() {
    return this._range;
  }
}
