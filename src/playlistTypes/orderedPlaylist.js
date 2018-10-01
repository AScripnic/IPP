const PlayList = require('./playlist');

class OrderedPlayList extends PlayList {
  constructor(list) {
    super(list);

    this.list.sort((a, b) => a.year - b.year);
  }
}

module.exports = OrderedPlayList;