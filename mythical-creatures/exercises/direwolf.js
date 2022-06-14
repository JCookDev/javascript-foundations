var Stark = require('./stark');

class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length <= 1) {
      this.starksToProtect.push(new Stark({name: stark.name}));
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    this.starksToProtect.pop().name;
    stark.safe = false;
  }
}

module.exports = Direwolf;
