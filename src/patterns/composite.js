const Iterator = require('./iterator');

class Composite {
  /**
   * @param {Iterator} songList 
   */
  constructor(songList) {
    this.songList = songList;
  }

  addToPlayList() {
    for (const song of this.songList) {
      song.addToPlayList();
    }
  }
}

module.exports = Composite;