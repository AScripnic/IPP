const fs = require('fs');
const path = require('path');
const Facade = require('./patterns/facade');

class FunctionaltyDemo {
  constructor() {
    this.facade = Facade.getInstace();
  }

  async start() {
    const songs = await this.facade.getSongs();

    songs.markAsListened();

    fs.writeFileSync(path.join(__dirname, '../database/result.json'), JSON.stringify(songs.getSongs(), null, 4));
  }
}

new FunctionaltyDemo().start();