class Facade {
  constructor() {}

  static getInstace() {
    if (Facade.instance) {
      return Facade.instance;
    }

    Facade.instance = new Facade();

    return Facade.instance;
  }
}

module.exports = Facade;