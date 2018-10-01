const OrderedPlaylist = require('../playlistTypes/orderedPlaylist');
const ShuffledPlaylist = require('../playlistTypes/shuffledPlaylist');

class playlistFactory {
  createPlaylist(list, type = 'ordered') {
    switch(type) {
      case 'ordered': 
        return new OrderedPlaylist(list);
      case 'shuffle': 
        return new ShuffledPlaylist(list);
      default: 
        return new ShuffledPlaylist(list);
    }
  }
}

module.exports = playlistFactory;