class Vampire {
  constructor (name, pet) {
    this.name = name;
    if (pet === undefined) {
      this.pet = "bat";
    } else {
      this.pet = pet;
    }
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink() {
    if (this.ouncesDrank === 50) {
      return 'I\'m too full to drink anymore!';
    }
    this.thirsty = false;
    this.ouncesDrank += 10;
  }
}

module.exports = Vampire;
