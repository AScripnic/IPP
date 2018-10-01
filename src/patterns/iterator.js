class Iterator {
  constructor(list) {
    this.list = list;
    this.index = 0;
  }

  [Symbol.iterator]() {
    return this;
  }

  reset() {
    this.index = 0;
  }

  next() {
    if (this.index === this.list.length) {
      this.reset();
      return { done: true };
    }

    return {
      value: this.list[this.index++],
      done: false
    };
  }
}

module.exports = Iterator;