const Dao = require('./dao');

class Service {
  constructor() {
    this.dao = new Dao();
  }

  async getSongs(count = 10) {
    const songs = await this.dao.getAllSongs();

    return songs.slice(0, count);
  }
}

module.exports = Service;