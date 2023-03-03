class Tamagotchi {
  constructor(pokeObj) {
    this.name = pokeObj.name;
    this.age = pokeObj.age;
    this.power = 5;
    this.hungry = true;
  }
  eat() {
    this.hungry = false;
    return "I refuse to eat.";
  }
  attack() {
    if (this.power >= 4) {
      this.power = this.power - 1;
      return "This is fun!";
    } else {
      return "Nah, I'm going to sleep instead.";
    }
  }
  sleep() {
    if (this.power === 10) {
      return "I have too much energy to rest. I'm going to chew something instead.";
    }
    this.power = this.power + 1
  }
}

module.exports = Tamagotchi;
