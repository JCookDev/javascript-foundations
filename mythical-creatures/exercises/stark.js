var Direwolf = require('./direwolf.js');

class Stark {
  constructor({name, area}) {
    this.name = name;
    this.location = area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe === true) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }

  callDirewolf(name, home) {
    console.log(Direwolf);
    var direwolf = new Direwolf(name, home);
    direwolf.home = this.location;
    direwolf.protect(this.name);
    return direwolf;
  }

}

module.exports = Stark;
