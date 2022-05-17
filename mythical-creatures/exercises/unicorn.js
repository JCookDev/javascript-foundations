class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = "white";
    } else {
      this.color = color;
    }
  }
  isWhite() {
    if (this.color !== "white") {
      return false;
    }
  }
  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;

// Thinking through the test process:

// 1. Read the test that you're running.
// 2. Ask yourself: Is the test going to fail and why?
// 3. Run the test.
// 4. Make it pass.
