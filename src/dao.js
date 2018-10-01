const fs = require('fs');
const path = require('path');

class MusicDao {
  constructor() {
  }

  getAllSongs() {
    return new Promise((resolve) => {
      const songsPath = MusicDao.SONGS_PATH;
      const songsJSON = fs.readFileSync(songsPath);
      
      resolve(JSON.parse(songsJSON));
    });
  }

  static get SONGS_PATH() {
    return path.join(__dirname, '../database/data.json');
  }

  static get MY_SONGS_PATH() {}
}