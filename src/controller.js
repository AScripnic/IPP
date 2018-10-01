const CMDOperations = require('./utils/CMDOperations');
const Facade = require('./patterns/facade');

class Controller {
  constructor() {
    this.cmdOperations = new CMDOperations();
    this.facade = new Facade();
  }

  async bootstrap() {
    this.clearScrean();
    await this.displayMainMenu();
  }

  async displayMainMenu() {
    const text = 
      "1. Display music list \n" +
      "2. Display playlist \n" +
      "3. Exit"

    this.log(text);
    const result = await this.cmdOperations.prompt('WHAT: ');

    switch(result) {
      case '1': 
        return this.facade();
      case '2': 
        return this.facade();
      case '3':
        return process.exit(0);
      default: 
        this.error('Invalid Input');
    }

    return await this.displayMainMenu();
  }

  clearScrean() {
    console.clear();
  }

  log(...args) {
    console.log(...args);
  }

  error(...args) {
    console.error('\x1b[31m', ...args, '\x1b[37m');
  }
}

new Controller().bootstrap();