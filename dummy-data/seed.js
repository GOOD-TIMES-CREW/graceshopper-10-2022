const { faker } = require("@faker-js/faker");
// const {
//   db,
//   models: { User, Product },
// } = require("../server/db");
// const { green, red } = require("chalk");

// DUMMY PRODUCT DATA

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

// DUMMY USER DATA

const users = [
  {
    firstName: "Harry",
    lastName: "Potter",
    email: "harry.potter@wizardingworld.co.uk",
    password: "fuckvoldemort",
    isAdmin: false,
  },
  {
    firstName: "Ronald",
    lastName: "Weasley",
    email: "ron.weasley@wizardingworld.co.uk",
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
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    email: "minerva.mcgonagall@wizardingworld.co.uk",
    password: "ilovealbus",
    isAdmin: true,
  },
];

const usersGenerator = () => {
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

Array.from({ length: 10 }).forEach(() => {
  users.push(usersGenerator());
});

// const seed = async () => {
//   try {
//     await db.sync({ force: true });

//     await Promise.all(
//       products.map((product) => {
//         return Product.create(product);
//       })
//     );

//     await Promise.all(
//       users.map((user) => {
//         return User.create(user);
//       })
//     );

//     console.log(green("WINGARDIUM LEVIOSA! Seeding successful!"));
//     db.close();
//   } catch (err) {
//     console.error(red("Bloody Hell! Something went wrong!"));
//     console.error(err);
//     db.close();
//   }
// };

// seed();
