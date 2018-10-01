const fs = require('fs');
const path = require('path');
const Song = require('./model');

class MusicDao {

  getAllSongs() {
    return new Promise((resolve) => {
      const songsPath = MusicDao.SONGS_PATH;
      const songsJSON = fs.readFileSync(songsPath);
      const { songs } = JSON.parse(songsJSON);

      const result = songs.map(song => new Song(song));

      resolve(result);
    });
  }

  static get SONGS_PATH() {
    return path.join(__dirname, '../database/data.json');
  }
}

module.exports = MusicDao;