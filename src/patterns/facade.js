const Service = require('../service');
const PlaylistFactory = require('../patterns/playlistFactory');

class Facade {
  constructor() {
    this.service = new Service();
    this.playlistFactory = new PlaylistFactory();
  }

  async getSongs() {
    const songs = await this.service.getSongs(10);

    const playlist = this.playlistFactory.createPlaylist(songs, 'ordered');

    return playlist;
  }

  static getInstace() {
    if (Facade.instance) {
      return Facade.instance;
    }

    Facade.instance = new Facade();

    return Facade.instance;
  }
}

module.exports = Facade;