class Dragon {
  constructor(name, rider, hungry){
    this.name = name;
    this.rider = rider;
    this.meals = 1;
    this.hungry = true;
  }

  greet(message) {
    message = this.rider;
    return `Hi, ${message}!`
  }
  eat() {
    if (this.meals < 3 ) {
      this.hungry = true;
      this.meals += 1;
    } else {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
