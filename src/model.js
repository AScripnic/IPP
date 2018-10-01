class Song {
  constructor(song) {
    this.title = song.title;
    this.artist = song.artist;
    this.year = song.year;
    this.web_url = song.web_url;
    this.img_url = song.img_url;
    this.listened = song.listened || false;
  }

  markAsListened() {
    this.listened = true;
  }
}

module.exports = Song;