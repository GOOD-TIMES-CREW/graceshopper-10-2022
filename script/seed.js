"use strict";
const { faker } = require("@faker-js/faker");
const {
  db,
  models: { User, Product, Order },
} = require("../server/db");

const customers = [
  {
    firstName: "Harry",
    lastName: "Potter",
    username: "harry.potter@wizardingworld.co.uk",
    password: "fuckvoldemort",
    isAdmin: false,
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    username: "hermione.granger@wizardingworld.co.uk",
    password: "fuckvoldemort",
    isAdmin: true,
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    username: "draco.malfoy@wizardingworld.co.uk",
    password: "fuckharry",
    isAdmin: false,
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    username: "severus.snape@wizardingworld.co.uk",
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
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    name: "Grand Theft Auto: 2",
    imageUrl: "https://i.ibb.co/xMwrQLr/gta2.jpg",
    description:
      "Grand Theft Auto 2 is an action-adventure game, developed by DMA Design and published by Rockstar Games in October 1999, for Microsoft Windows and the PlayStation, and the Dreamcast and Game Boy Color in 2000. It is the sequel to 1997's Grand Theft Auto, and the second main instalment of the Grand Theft Auto series. Set within a retrofuturistic metropolis known as `Anywhere City`, the game focuses on players taking the role of a criminal as they roam an open world, conducting jobs for various crime syndicates and having free rein to do whatever they wish to achieve their goal. The game's intro is unique for a title in the series, as it involved live-action scenes filmed by Rockstar Games.",
    price: 40.0,
    genre: "action-adventure",
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    stripeId: "price_1LxNkYJfLED86s3eCISPnKJ6",
    name: "Kirby Tilt N' Tumble",
    imageUrl: "https://i.ibb.co/Cm2sCW3/kirbytilt.png",
    description:
      "Kirby Tilt 'n' Tumble[a] is an action puzzle video game developed by HAL Laboratory and published by Nintendo for the Game Boy Color handheld video game console. It was released in Japan on August 23, 2000 and in North America on April 11, 2001. Due to the cartridge having a built-in accelerometer, it has a unique shape, as well as a unique transparent pink color in reference to Kirby.",
    price: 40.0,
    genre: "action, puzzle",
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    stripeId: "price_1LxNljJfLED86s3ekKpNzB4w",
    name: "Pokemon Yellow: Special Pikachu Edition",
    imageUrl: "https://i.ibb.co/S5R3Fnb/pokemonyellow.jpg",
    description:
      "Pokémon Yellow Version: Special Pikachu Edition,[a] more commonly known as Pokémon Yellow Version or Pokémon Yellow, is a 1998 role-playing video game developed by Game Freak and published by Nintendo for the Game Boy. It is an enhanced version of Pokémon Red and Blue and is part of the first generation of the Pokémon video game series. It was first released in Japan on September 12, 1998, in Australia and North America in 1999 and in Europe in 2000. Along with the release of Pokémon Yellow, a special edition yellow Pokémon-themed Game Boy Color was also released. Pokémon Yellow is loosely based on the anime.",
    price: 40.0,
    genre: "role-playing",
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    name: "Pokemon Red",
    imageUrl: "https://i.ibb.co/nbRNnXK/pokemonred.jpg",
    description:
      "The player controls the protagonist from an overhead perspective and navigates him throughout the fictional region of Kanto in a quest to master Pokémon battling. The goal of the games is to become the champion of the Indigo League by defeating the eight Gym Leaders and then the top four Pokémon trainers in the land, the Elite Four. Another objective is to complete the Pokédex, an in-game encyclopedia, by obtaining the 151 available Pokémon. Red and Blue utilize the Game Link Cable, which connects two Game Boy systems together and allows Pokémon to be traded or battled between games. Both titles are independent of each other but feature the same plot,[1] and while they can be played separately, it is necessary for players to trade between both games in order to obtain all of the original 151 Pokémon.",
    price: 40.0,
    genre: "role-playing",
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    name: "Super Mario Bros. Deluxe",
    imageUrl: "https://i.ibb.co/C20dgJr/supermariobrosdeluxe.jpg",
    description:
      "Super Mario Bros. Deluxe is a platformer video game released on the Game Boy Color in 1999 as an enhanced port of the 1985 NES game Super Mario Bros., also including its 1986 Family Computer Disk System sequel, Super Mario Bros.: The Lost Levels, as a hidden reward. It was released fourteen years after the original Super Mario Bros. The game was never released in Japan for the normal Game Boy Color Game Pak, but rather the Nintendo Power cartridge. This game was initially released for the 3DS's Virtual Console in Japan, Europe, and Australia in 2014, as part of a special offer, and is now available to download for everyone in Europe, Australia, and North America with an added cost.",
    price: 40.0,
    genre: "platformer",
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    name: "Pokemon Pinball",
    imageUrl: "https://i.ibb.co/Yd6H8yz/pokemonpinball.jpg",
    description:
      "Pokémon Pinball[a] is a pinball-based Pokémon spin-off video game for the Game Boy Color. It was released in Japan on April 14, 1999, and in North America on June 28, 1999. In it, the ball is a Poké Ball, and most of the objects on the table are Pokémon-related.",
    price: 40.0,
    genre: "pinball",
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    name: "Shantae",
    imageUrl: "https://i.ibb.co/0Ym1P44/shantae.jpg",
    description:
      "Shantae is a 2D platform video game developed by WayForward Technologies for the Game Boy Color. Capcom[1] published and distributed the game exclusively in North America on June 2, 2002. It was designed by Matt Bozon and is the first game in the Shantae series. It also showed support as playing the game with a GBA adds enhancements to the game",
    price: 40.0,
    genre: "platformer",
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    name: "Tony Hawk's Pro Skater 2",
    imageUrl: "https://i.ibb.co/MVXgpKv/tonyhawk2.jpg",
    description:
      "Tony Hawk's Pro Skater 2 is a skateboarding video game developed by Neversoft and published by Activision. It is the second installment in the Tony Hawk's series of sports games and was released for the PlayStation in 2000, with subsequent ports to Microsoft Windows, Game Boy Color, and Dreamcast the same year. In 2001, the game was ported to the Mac OS, Game Boy Advance, Nintendo 64, and Xbox (as part of Tony Hawk's Pro Skater 2x). The game was later ported to Windows Mobile and Windows Phone devices in 2006 and to iOS devices in 2010.",
    price: 40.0,
    genre: "sports",
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    name: "Power Rangers Lightspeed Rescue",
    imageUrl: "https://i.ibb.co/vPqqyFr/pwrescue.jpg",
    description:
      "Power Rangers Lightspeed Rescue is a video game based on the 8th season of the TV series Power Rangers Lightspeed Rescue. Four very different versions of the game were produced for the Game Boy Color, Macintosh/Windows, Nintendo 64[2] and PlayStation by various developers and publishers.",
    price: 40.0,
    genre: "platformer, action",
    system: "Gameboy Color",
    inventory: 100,
  },
  {
    name: "Warcraft II: The Dark Saga",
    imageUrl: "https://i.ibb.co/yPPbDZd/warcraft2.jpg",
    description: "",
    price: 40.0,
    genre: "strategy",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "Tony Hawk's Pro Skater",
    imageUrl: "https://i.ibb.co/n6VMPm2/proskater.jpg",
    description: "",
    price: 40.0,
    genre: "action-adventure",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "DIABLO",
    imageUrl: "https://i.ibb.co/MgYY2qX/diablo.jpg",
    description: "",
    price: 40.0,
    genre: "action, puzzle",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "Toy Story 2",
    imageUrl: "https://i.ibb.co/M9SK8LV/toystory2.jpg",
    description: "",
    price: 40.0,
    genre: "role-playing",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "PaRappaTheRapper",
    imageUrl: "https://i.ibb.co/jMkLhhf/parappa.jpg",
    description: "",
    price: 40.0,
    genre: "role-playing",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "Crash Bandicoot",
    imageUrl: "https://i.ibb.co/HFY7JkP/crashbandicoot.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "Spyro The Dinosaur",
    imageUrl: "https://i.ibb.co/4P9VD7j/spyro.jpg",
    description: "",
    price: 40.0,
    genre: "pinball",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "Grand Theft Auto",
    imageUrl: "https://i.ibb.co/NsFCpQ7/grandtheftauto.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "Silent Hill",
    imageUrl: "https://i.ibb.co/FYQPbFZ/silenthill.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "DOOM",
    imageUrl: "https://i.ibb.co/yQQd2kS/doom.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "PlayStation",
    inventory: 100,
  },
  {
    name: "Streets of Rage 2",
    imageUrl: "https://i.ibb.co/DQRv7L8/streets2.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Rugby World Cup '95",
    imageUrl: "https://i.ibb.co/yp3WDg6/rugby95.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Atomic Robo Kid",
    imageUrl: "https://i.ibb.co/vVfHk7D/robokid.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Sonic 3D Blast",
    imageUrl: "https://i.ibb.co/DMw42Lm/sonic3dblast.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Sonic The Hedgehog",
    imageUrl: "https://i.ibb.co/XY52gXR/sonicthehedgehog.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Scooby Doo Mystery",
    imageUrl: "https://i.ibb.co/CHdFPk4/scooby.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "NBA Action '95",
    imageUrl: "https://i.ibb.co/qskfCrq/nbaaction94.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Mortal Kombat",
    imageUrl: "https://i.ibb.co/pJz4wQF/mortalkombat.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Michael Jackson's Moonwalker",
    imageUrl: "https://i.ibb.co/nMPJMYC/moonwalker.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Math Blaster: Episode 1",
    imageUrl: "https://i.ibb.co/Np4ck1f/mathblaster.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "NFL Madden '94",
    imageUrl: "https://i.ibb.co/pn0dVCz/madden94.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "NHLPA Hockey '93",
    imageUrl: "https://i.ibb.co/cCk3yM3/hockey93.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Golden Axe",
    imageUrl: "https://i.ibb.co/bg8ctc3/goldenaxe.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Art Alive",
    imageUrl: "https://i.ibb.co/DQrfF7c/artalive.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "Barbie Vacation Adventure",
    imageUrl: "https://i.ibb.co/PFPN1Dm/barbievacation.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Genesis",
    inventory: 100,
  },
  {
    name: "X-Men vs. Street Fighter",
    imageUrl: "https://i.ibb.co/XsfNPZd/xmenvsstreetfighter.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Saturn Bomberman",
    imageUrl: "https://i.ibb.co/2PjkwXx/saturnbomberman.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Space Jam",
    imageUrl: "https://i.ibb.co/YdFDsry/spacejam.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Soviet Strike",
    imageUrl: "https://i.ibb.co/ZxnYR61/sovietstrike.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Quake",
    imageUrl: "https://i.ibb.co/fD78YN4/quake.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Street Fighter Collection",
    imageUrl: "https://i.ibb.co/7r3rNbC/streetfightercollection.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "The Need For Speed",
    imageUrl: "https://i.ibb.co/997Vyrf/nfs.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Sonic Jam",
    imageUrl: "https://i.ibb.co/P5dgJtM/sonicblast.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Sonic 3D Blast",
    imageUrl: "https://i.ibb.co/M8qBpzv/sonic3dblast.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Resident Evil",
    imageUrl: "https://i.ibb.co/cCDfSwx/residentevil.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Marvel Super Heroes",
    imageUrl: "https://i.ibb.co/JddtKRX/marvelsuperheroes.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Final Fight Revenge",
    imageUrl: "https://i.ibb.co/ky2RPSc/finalfightrevenge.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Sega Saturn",
    inventory: 100,
  },
  {
    name: "Mortal Kombat Trilogy",
    imageUrl: "https://i.ibb.co/y4wSRZ9/mortalkombattrilogy.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Super Mario 64",
    imageUrl: "https://i.ibb.co/LZkYBY7/supermario64.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Wrestlemania 2000",
    imageUrl: "https://i.ibb.co/JnZmvBX/wrestlemania2000.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Tom Clancy's Rainbow Six",
    imageUrl: "https://i.ibb.co/pwqhRjx/rainbowsix.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Fifa '99",
    imageUrl: "https://i.ibb.co/gM4yMtG/fifa99.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Tom and Jerry: Fists of Furry",
    imageUrl: "https://i.ibb.co/FmKj3Fy/tjfistsoffury.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Hot Wheels: Turbo Racing",
    imageUrl: "https://i.ibb.co/g9MS8qm/hotwheels.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Toy Story 2",
    imageUrl: "https://i.ibb.co/RcTsD0P/toystory2.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Tony Hawk's Pro Skater 3",
    imageUrl: "https://i.ibb.co/FDHNtgf/thproskater3.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "BomberMan 64",
    imageUrl: "https://i.ibb.co/YdrntSZ/bomberman64.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Yoshi's Story",
    imageUrl: "https://i.ibb.co/NNCqk7x/yoshisstory.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "DOOM 64",
    imageUrl: "https://i.ibb.co/HFdVk2g/doom64.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Pokemon Stadium",
    imageUrl: "https://i.ibb.co/TkVyJ1h/pokemonstadium.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Spider-Man",
    imageUrl: "https://i.ibb.co/ZmSkJL3/spiderman.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Mortal Kombat 4",
    imageUrl: "https://i.ibb.co/KsJ2x0f/mortalkombat4.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Paper Mario",
    imageUrl: "https://i.ibb.co/s1Wk10P/papermario.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Kirby 64: The Crystal Shards",
    imageUrl: "https://i.ibb.co/9qV6Mhk/kirbycrystalshards.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Super Smash Bros.",
    imageUrl: "https://i.ibb.co/R7MStNV/supersmash.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Pokemon Stadium 2",
    imageUrl: "https://i.ibb.co/4MDFGgm/pokemonstadium2.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "GoldenEye 007",
    imageUrl: "https://i.ibb.co/BPY2G13/goldeneye007.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "Donkey Kong 64",
    imageUrl: "https://i.ibb.co/qYbNjdj/donkeykong64.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
  {
    name: "MarioKart 64",
    imageUrl: "https://i.ibb.co/tC7RQyH/mariokart64.jpg",
    description: "",
    price: 40.0,
    genre: "platformer",
    system: "Nintendo 64",
    inventory: 100,
  },
];

const orders = [
  {
    status: "unfulfilled",
    shipped: false,
    confirmationNumber: "001",
    shipping_address: "123 Main St, Los Angeles, CA",
    dateOrdered: "2022-10-20",
    userId: 1,
  },
  {
    status: "unfulfilled",
    shipped: false,
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
    username: faker.internet.email(),
    password: faker.internet.password(),
    isAdmin: false,
  };
};

Array.from({ length: 11 }).forEach(() => {
  customers.push(customerGenerator());
});

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all(
    customers.map((user) => {
      return User.create(user);
    })
  );

  const product = await Promise.all(
    products.map((product) => {
      return Product.create(product);
    })
  );

  const order = await Promise.all(
    orders.map((order) => {
      return Order.create(order);
    })
  );

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${product.length} products`);
  console.log(`seeded ${order.length} orders`);
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
