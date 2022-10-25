"use strict";
const {
  db,
  models: { User, Product },
} = require("../server/db");
const { faker } = require("@faker-js/faker");

// DUMMY USER DATA
const customers = [
  {
    firstName: "Harry",
    lastName: "Potter",
    email: "harry.potter@wizardingworld.co.uk",
    password: "fuckvoldemort",
    isAdmin: false,
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    email: "hermione.granger@wizardingworld.co.uk",
    password: "fuckvoldemort",
    isAdmin: true,
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    email: "draco.malfoy@wizardingworld.co.uk",
    password: "fuckharry",
    isAdmin: false,
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    email: "severus.snape@wizardingworld.co.uk",
    password: "iluvlily",
    isAdmin: true,
  },
];

const products = [
  {
    name: "Dragon Ball Z: Legendary Super Warriors",
    imageUrl: "dummy data/img/gameboy color/dragonballsuperwarriors.jpeg",
    description:
      "Dragon Ball Z: Legendary Super Warriors (ドラゴンボールZ 伝説の超戦士たち, Doragon Bōru Zetto Densetsu no Chô Senshi Tachi) is a turn-based fighting game released for the Game Boy Color. It is played with the use of in-game cards for attacks, techniques and support items.[1] The game's story takes place from the start of Dragon Ball Z, the Saiyan Saga, and runs until the end of the Buu Saga. The game also includes two extra stories involving Future Trunks's timeline. The game boasts a large array of characters for a Game Boy Color game, featuring all of the Ginyu Force, Super Saiyan forms of all characters that reach it, as well as the fusion characters Vegito and Gotenks. Once the game has been completed, the player is free to replay the story mode or battle modes the game has with the freedom to use any characters and forms they choose in any of the given battles. During the player's second playthrough, they may be able to unlock additional characters if certain criteria are met.",
    price: 40.0,
    genre: "strategy",
    inventory: 100,
  },
  {
    name: "Grand Theft Auto: 2",
    imageUrl: "dummy data/img/gameboy color/gta2.jpeg",
    description:
      "Grand Theft Auto 2 is an action-adventure game, developed by DMA Design and published by Rockstar Games in October 1999, for Microsoft Windows and the PlayStation, and the Dreamcast and Game Boy Color in 2000. It is the sequel to 1997's Grand Theft Auto, and the second main instalment of the Grand Theft Auto series. Set within a retrofuturistic metropolis known as `Anywhere City`, the game focuses on players taking the role of a criminal as they roam an open world, conducting jobs for various crime syndicates and having free rein to do whatever they wish to achieve their goal. The game's intro is unique for a title in the series, as it involved live-action scenes filmed by Rockstar Games.",
    price: 40.0,
    genre: "action-adventure",
    inventory: 100,
  },
  {
    name: "Kirby Tilt N' Tumble",
    imageUrl: "dummy data/img/gameboy color/kirbytilt.jpeg",
    description:
      "Kirby Tilt 'n' Tumble[a] is an action puzzle video game developed by HAL Laboratory and published by Nintendo for the Game Boy Color handheld video game console. It was released in Japan on August 23, 2000 and in North America on April 11, 2001. Due to the cartridge having a built-in accelerometer, it has a unique shape, as well as a unique transparent pink color in reference to Kirby.",
    price: 40.0,
    genre: "action, puzzle",
    inventory: 100,
  },
];

const customerGenerator = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isAdmin: false,
  };
};

const productGenerator = () => {
  return {
    name: faker.commerce.productName(),
    imageUrl: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    genre: faker.commerce.productAdjective(),
    inventory: 100,
  };
};

Array.from({ length: 11 }).forEach(() => {
  customers.push(customerGenerator());
});

Array.from({ length: 12 }).forEach(() => {
  products.push(productGenerator());
});

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all(
    customers.map((user) => {
      return User.create(user);
    })
  );

  // Creating Products
  const product = await Promise.all(
    products.map((product) => {
      return Product.create(product);
    })
  );

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${product.length} products`);
  console.log(`seeded successfully`);
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1],
  //   },
  // };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
