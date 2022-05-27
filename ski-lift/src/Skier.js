class Skier {
  constructor (name){
    this.name = name;
    this.hasLiftTicket = true;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }
  takeLesson() {
    this.skillLevel += 1;
  }

  pickSlope() {
    if (this.skillLevel >= 2 && this.skillLevel > 4) {
      this.nextSlope = 'black diamond';
    } else {
      this.nextSlope = 'blue square';
    }
  }
}

module.exports = Skier;
