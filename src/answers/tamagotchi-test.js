var Tamagotchi = require("./tamagotchi.js");
var assert = require("chai").assert;

describe("Tamagotchi", function () {
  it.skip("should have a name and age", function () {
    var pikachu = new Tamagotchi({ name: "Pikachu", age: 3 });
    var charmander = new Tamagotchi({ name: "Charmander", age: 2.5 });

    assert.equal(pikachu.name, "Pikachu");
    assert.equal(pikachu.age, 3);

    assert.equal(charmander.name, "Charmander");
    assert.equal(charmander.age, 2.5);
  });

  it.skip("should start off hungry with some power", function () {
    var mew = new Tamagotchi({ name: "Mew", age: 0.5 });

    assert.equal(mew.power, 5);
    assert.equal(mew.hungry, true);
  });

  it.skip("should no longer be hungry after eating", function () {
    var squirtle = new Tamagotchi({ name: "Squirtle", age: 1.5 });

    assert.equal(squirtle.hungry, true);

    squirtle.eat();

    assert.equal(squirtle.hungry, false);
  });

  it.skip("should not eat if they're not hungry", function () {
    var gyrados = new Tamagotchi({ name: "Gyrados", age: 5 });

    var firstMeal = gyrados.eat();
    var secondMeal = gyrados.eat();

    assert.equal(secondMeal, "I refuse to eat.");
  });

  it.skip("should burn energy when attacking", function () {
    var belsprout = new Tamagotchi({ name: "Belsprout", age: 4 });

    assert.equal(belsprout.power, 5);

    var attackingTomagotchi = belsprout.attack();

    assert.equal(belsprout.power, 4);
    assert.equal(attackingTomagotchi, "This is fun!");
  });

  it.skip("should not Attack if they're too tired", function () {
    //note: they should only attack with an energy level of 3 or higher
    var belsprout = new Tamagotchi({ name: "Belsprout", age: 4 });

    assert.equal(belsprout.power, 5);

    var firstAttack = belsprout.attack();
    var secondAttack = belsprout.attack();

    assert.equal(belsprout.power, 3);

    var thirdAttack = belsprout.attack();

    assert.equal(belsprout.power, 3);
    assert.equal(thirdAttack, "Nah, I'm going to sleep instead.");
  });

  it.skip("should rest to get more energy", function () {
    var squirtle = new Tamagotchi({ name: "Squirtle", age: 1.5 });

    assert.equal(squirtle.power, 5);

    squirtle.sleep();

    assert.equal(squirtle.power, 6);
  });

  it.skip("should not be able to get an energy level higher than 10", function () {
    var mew = new Tamagotchi({ name: "Mew", age: 0.5 });

    assert.equal(mew.power, 5);

    for (var i = 0; i < 5; i++) {
      mew.sleep();
    }

    assert.equal(mew.power, 10);
    assert.equal(
      mew.sleep(),
      "I have too much energy to rest. I'm going to chew something instead."
    );
    assert.equal(mew.power, 10);
  });
});
