const OrderedPlaylist = require('../playlistTypes/orderedPlaylist');
const ShuffledPlaylist = require('../playlistTypes/shuffledPlaylist');

class Factory {
  createPlaylist(list, type = 'ordered') {
    switch(type) {
      case 'ordered': return OrderedPlaylist(list);
      case 'shuffle': return ShuffledPlaylist(list);
    }
  }
}