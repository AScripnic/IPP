const Iterator = require('../patterns/iterator');
const Media = require('../playlistTypes/media');

class PlayList extends Media {
  constructor(list) {
    super();
    this.list = list;
    this.iterator = new Iterator(list);
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    this.iterator.next();
  }

  markAsListened() {
    for (const song of this.list) {
      song.markAsListened();
    }
  }
}

module.exports = PlayList;