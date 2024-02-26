export default class Stopwatch {
  constructor(dt) {
    this.time = 0;
    this.dt = dt;
    this._max = 0;
    this._intervalId = null;
    this.onTick = null;
  }
  continueTo(max) {
    this._max = max;
    this._intervalId ??= setInterval(this.tick.bind(this), this.dt);
  }
  startTo(max) {
    this.time = 0;
    this.continueTo(max);
  }
  stop() {
    clearInterval(this._intervalId);
    this._intervalId = null;
  }
  tick() {
    if (this.time < this._max) {
      this.time = Math.min(this._max, this.time+this.dt);
      this.onTick?.call();
    } else this.stop();
  }
}