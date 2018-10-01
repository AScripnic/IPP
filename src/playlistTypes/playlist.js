const Iterator = require('../patterns/iterator');

class PlayList extends Iterator {
  constructor(list) {
    super(list);
  }

  markAsListened() {
    for (const song of this.list) {
      song.markAsListened();
    }
  }
}

module.exports = PlayList;