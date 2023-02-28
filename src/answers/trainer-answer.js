const Tamagotchi = require("./tamagotchi");

class Trainer {
  constructor(trainerName, pokeObject) {
    this.name = trainerName;
    this.tamagotchi = pokeObject;
  }
  fillFoodBowl() {
    this.tamagotchi.hungry = false;
  }

  trainTamagotchi() {
    if (this.tamagotchi.attack() === "This is fun!") {
      return `${this.tamagotchi.name} loves training!`;
    } else {
      return `Oh, I think ${this.tamagotchi.name} is too tired. I guess we won't train right now.`;
    }
  }
}

module.exports = Trainer;
