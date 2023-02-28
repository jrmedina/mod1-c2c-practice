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

  catchTamagotchi(pokeName, pokeAge) {
    if (!this.tamagotchi) {
      var poke = new Tamagotchi({ name: pokeName, age: pokeAge });
      this.tamagotchi = poke;
    } else {
      return `You can\'t adopt ${pokeName}. You already have ${this.tamagotchi.name}!`;
    }
  }
}

module.exports = Trainer;
