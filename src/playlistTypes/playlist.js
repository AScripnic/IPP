const Iterator = require('../patterns/iterator');

class PlayList extends Iterator {
  constructor(list) {
    super(list);
  }
}

module.exports = PlayList;