const readline = require('readline');

class CMDOperations {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  prompt(string) {
    return new Promise((resolve) => {
      this.rl.question(string, (answer) => {
        resolve(answer);
      });
    });    
  }
}

module.exports = CMDOperations;