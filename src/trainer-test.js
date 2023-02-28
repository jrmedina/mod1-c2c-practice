var Trainer = require("./trainer.js");
var Tamagotchi = require("./tamagotchi.js");
var assert = require("chai").assert;

describe("Trainer", function () {
  it.skip("should have a name and a Tamagotchi", function () {
    var pikachu = new Tamagotchi({ name: "Pikachu", age: 3 });
    var ash = new Trainer("Ash", pikachu);

    assert.equal(ash.name, "Ash");
    assert.instanceOf(ash.tamagotchi, Tamagotchi);
    assert.equal(ash.tamagotchi.name, "Pikachu");
  });

  it.skip("should be able to have no Tamagotchi", function () {
    var dawn = new Trainer("Dawn");

    assert.equal(dawn.Tamagotchi, undefined);
  });

  it.skip("should feed Tamagotchi", function () {
    var bulbasour = new Tamagotchi({ name: "Bulbasour", age: 2.5 });
    var nick = new Trainer("Nick", bulbasour);

    assert.equal(bulbasour.hungry, true);

    nick.fillFoodBowl();

    assert.equal(bulbasour.hungry, false);
  });

  it.skip("should train with Tamagotchi", function () {
    var zapados = new Tamagotchi({ name: "Zapados", age: 5 });
    var leah = new Trainer("Leah", zapados);

    var practice = leah.trainTamagotchi();

    assert.equal(practice, "Zapados loves training!");
  });

  it.skip("should notice when Tamagotchi no longer wants to train", function () {
    var dragonite = new Tamagotchi({ name: "Dragonite", age: 0.5 });
    var kari = new Trainer("Kari", dragonite);

    var firstSession = kari.trainTamagotchi();
    var secondSession = kari.trainTamagotchi();

    assert.equal(secondSession, "Dragonite loves training!");

    var thirdSession = kari.trainTamagotchi();

    assert.equal(
      thirdSession,
      "Oh, I think Dragonite is too tired. I guess we won't train right now."
    );
  });

  it.skip("should be able to catch a Tamagotchi if they don't already have one", function () {
    var dawn = new Trainer("Dawn");

    dawn.catchTamagotchi("Snorlax", 2);

    assert.instanceOf(dawn.tamagotchi, Tamagotchi);
    assert.equal(dawn.tamagotchi.name, "Snorlax");
    assert.equal(dawn.tamagotchi.age, 2);
  });

  it.skip("should not be able to catch a Tamagotchi if they already have one", function () {
    var pidgey = new Tamagotchi({ name: "Pidgey", age: 0.5 });
    var kayla = new Trainer("Kayla", pidgey);

    var catchAttempt = kayla.catchTamagotchi("Ratatat", 1);

    assert.equal(kayla.tamagotchi.name, "Pidgey");
    assert.equal(
      catchAttempt,
      "You can't adopt Ratatat. You already have Pidgey!"
    );
  });
});
