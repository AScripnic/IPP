const Playlist = require('./playlist');

class ShuffledPlaylist extends Playlist {
  constructor(list) {
    super(list);

    this.shuffle();
  }

  shuffle() {
    for (let i = this.list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
    }
  }
}

module.exports = ShuffledPlaylist;