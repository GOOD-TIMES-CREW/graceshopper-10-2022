"use strict";
const { faker } = require("@faker-js/faker");
const {
  db,
  models: { User, Product, Order, Order_Product },
} = require("../server/db");

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
    imageUrl: "https://i.ibb.co/8Mt86YM/dbzsuperwarriors.jpg",
    description:
      "Dragon Ball Z: Legendary Super Warriors (ドラゴンボールZ 伝説の超戦士たち, Doragon Bōru Zetto Densetsu no Chô Senshi Tachi) is a turn-based fighting game released for the Game Boy Color. It is played with the use of in-game cards for attacks, techniques and support items.[1] The game's story takes place from the start of Dragon Ball Z, the Saiyan Saga, and runs until the end of the Buu Saga. The game also includes two extra stories involving Future Trunks's timeline. The game boasts a large array of characters for a Game Boy Color game, featuring all of the Ginyu Force, Super Saiyan forms of all characters that reach it, as well as the fusion characters Vegito and Gotenks. Once the game has been completed, the player is free to replay the story mode or battle modes the game has with the freedom to use any characters and forms they choose in any of the given battles. During the player's second playthrough, they may be able to unlock additional characters if certain criteria are met.",
    price: 40.0,
    genre: "strategy",
    inventory: 100,
  },
  {
    name: "Grand Theft Auto: 2",
    imageUrl: "https://i.ibb.co/xMwrQLr/gta2.jpg",
    description:
      "Grand Theft Auto 2 is an action-adventure game, developed by DMA Design and published by Rockstar Games in October 1999, for Microsoft Windows and the PlayStation, and the Dreamcast and Game Boy Color in 2000. It is the sequel to 1997's Grand Theft Auto, and the second main instalment of the Grand Theft Auto series. Set within a retrofuturistic metropolis known as `Anywhere City`, the game focuses on players taking the role of a criminal as they roam an open world, conducting jobs for various crime syndicates and having free rein to do whatever they wish to achieve their goal. The game's intro is unique for a title in the series, as it involved live-action scenes filmed by Rockstar Games.",
    price: 40.0,
    genre: "action-adventure",
    inventory: 100,
  },
  {
    name: "Kirby Tilt N' Tumble",
    imageUrl: "https://i.ibb.co/Cm2sCW3/kirbytilt.png",
    description:
      "Kirby Tilt 'n' Tumble[a] is an action puzzle video game developed by HAL Laboratory and published by Nintendo for the Game Boy Color handheld video game console. It was released in Japan on August 23, 2000 and in North America on April 11, 2001. Due to the cartridge having a built-in accelerometer, it has a unique shape, as well as a unique transparent pink color in reference to Kirby.",
    price: 40.0,
    genre: "action, puzzle",
    inventory: 100,
  },
  {
    name: "Pokemon Yellow: Special Pikachu Edition",
    imageUrl: "https://i.ibb.co/S5R3Fnb/pokemonyellow.jpg",
    description:
      "Pokémon Yellow Version: Special Pikachu Edition,[a] more commonly known as Pokémon Yellow Version or Pokémon Yellow, is a 1998 role-playing video game developed by Game Freak and published by Nintendo for the Game Boy. It is an enhanced version of Pokémon Red and Blue and is part of the first generation of the Pokémon video game series. It was first released in Japan on September 12, 1998, in Australia and North America in 1999 and in Europe in 2000. Along with the release of Pokémon Yellow, a special edition yellow Pokémon-themed Game Boy Color was also released. Pokémon Yellow is loosely based on the anime.",
    price: 40.0,
    genre: "role-playing",
    inventory: 100,
  },
  {
    name: "Pokemon Red",
    imageUrl: "https://i.ibb.co/nbRNnXK/pokemonred.jpg",
    description:
      "The player controls the protagonist from an overhead perspective and navigates him throughout the fictional region of Kanto in a quest to master Pokémon battling. The goal of the games is to become the champion of the Indigo League by defeating the eight Gym Leaders and then the top four Pokémon trainers in the land, the Elite Four. Another objective is to complete the Pokédex, an in-game encyclopedia, by obtaining the 151 available Pokémon. Red and Blue utilize the Game Link Cable, which connects two Game Boy systems together and allows Pokémon to be traded or battled between games. Both titles are independent of each other but feature the same plot,[1] and while they can be played separately, it is necessary for players to trade between both games in order to obtain all of the original 151 Pokémon.",
    price: 40.0,
    genre: "role-playing",
    inventory: 100,
  },
  {
    name: "Super Mario Bros. Deluxe",
    imageUrl: "https://i.ibb.co/C20dgJr/supermariobrosdeluxe.jpg",
    description:
      "Super Mario Bros. Deluxe is a platformer video game released on the Game Boy Color in 1999 as an enhanced port of the 1985 NES game Super Mario Bros., also including its 1986 Family Computer Disk System sequel, Super Mario Bros.: The Lost Levels, as a hidden reward. It was released fourteen years after the original Super Mario Bros. The game was never released in Japan for the normal Game Boy Color Game Pak, but rather the Nintendo Power cartridge. This game was initially released for the 3DS's Virtual Console in Japan, Europe, and Australia in 2014, as part of a special offer, and is now available to download for everyone in Europe, Australia, and North America with an added cost.",
    price: 40.0,
    genre: "platformer",
    inventory: 100,
  },
  {
    name: "Pokemon Pinball",
    imageUrl: "https://i.ibb.co/Yd6H8yz/pokemonpinball.jpg",
    description:
      "Pokémon Pinball[a] is a pinball-based Pokémon spin-off video game for the Game Boy Color. It was released in Japan on April 14, 1999, and in North America on June 28, 1999. In it, the ball is a Poké Ball, and most of the objects on the table are Pokémon-related.",
    price: 40.0,
    genre: "pinball",
    inventory: 100,
  },
  {
    name: "Shantae",
    imageUrl: "https://i.ibb.co/0Ym1P44/shantae.jpg",
    description:
      "Shantae is a 2D platform video game developed by WayForward Technologies for the Game Boy Color. Capcom[1] published and distributed the game exclusively in North America on June 2, 2002. It was designed by Matt Bozon and is the first game in the Shantae series. It also showed support as playing the game with a GBA adds enhancements to the game",
    price: 40.0,
    genre: "platformer",
    inventory: 100,
  },
  {
    name: "Tony Hawk's Pro Skater 2",
    imageUrl: "https://i.ibb.co/MVXgpKv/tonyhawk2.jpg",
    description:
      "Tony Hawk's Pro Skater 2 is a skateboarding video game developed by Neversoft and published by Activision. It is the second installment in the Tony Hawk's series of sports games and was released for the PlayStation in 2000, with subsequent ports to Microsoft Windows, Game Boy Color, and Dreamcast the same year. In 2001, the game was ported to the Mac OS, Game Boy Advance, Nintendo 64, and Xbox (as part of Tony Hawk's Pro Skater 2x). The game was later ported to Windows Mobile and Windows Phone devices in 2006 and to iOS devices in 2010.",
    price: 40.0,
    genre: "sports",
    inventory: 100,
  },
  {
    name: "Power Rangers Lightspeed Rescue",
    imageUrl: "https://i.ibb.co/vPqqyFr/pwrescue.jpg",
    description:
      "Power Rangers Lightspeed Rescue is a video game based on the 8th season of the TV series Power Rangers Lightspeed Rescue. Four very different versions of the game were produced for the Game Boy Color, Macintosh/Windows, Nintendo 64[2] and PlayStation by various developers and publishers.",
    price: 40.0,
    genre: "platformer, action",
    inventory: 100,
  },
];

const orders = [
  {
    status: "fulfilled",
    shipped: false,
    confirmationNumber: "001",
    shipping_address: "123 Main St, Los Angeles, CA",
    dateOrdered: "2022-10-20",
    userId: 1,
  },
  {
    status: "fulfilled",
    shipped: true,
    confirmationNumber: "002",
    shipping_address: "123 Mango St, Miami, FL",
    dateOrdered: "2022-10-20",
    userId: 2,
  },
  {
    status: "unfulfilled",
    shipped: false,
    confirmationNumber: "003",
    shipping_address: "123 Apple St, Portland, OR",
    dateOrdered: "2022-10-20",
    userId: 3,
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
    imageUrl: faker.image.avatar(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    genre: faker.commerce.productAdjective(),
    inventory: 100,
  };
};

Array.from({ length: 11 }).forEach(() => {
  customers.push(customerGenerator());
});

Array.from({ length: 5 }).forEach(() => {
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

  // Creating Orders
  const order = await Promise.all(
    orders.map((order) => {
      return Order.create(order);
    })
  );

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${product.length} products`);
  console.log(`seeded ${order.length} orders`);
  console.log(`seeded successfully`);
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
