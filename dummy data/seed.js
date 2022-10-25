const { faker } = require("@faker-js/faker");
const { db } = require("../server/db/db");
const { green, red } = require("chalk");

const Users = require("./server/db/models/Students");
const Products = require("./server/db/models/Campuses");

const gameboyColor = [
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
    email: "hpotter@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/tPqV51G/harry.webp",
    gpa: 3.5,
    campusId: 1,
  },
  {
    firstName: "Ronald",
    lastName: "Weasley",
    email: "rweasley@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/QmnT5fv/ron.jpg",
    gpa: 2.7,
    campusId: 1,
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    email: "hgranger@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/QdVQvYF/hermione-jpg.webp",
    gpa: 4.3,
    campusId: 1,
  },
  {
    firstName: "Dean",
    lastName: "Thomas",
    email: "dthomas@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/Z8wnwds/dean.jpg",
    gpa: 3.8,
    campusId: 1,
  },
  {
    firstName: "Padma",
    lastName: "Patil",
    email: "papatil@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/5BvhztF/padma.jpg",
    gpa: 3.0,
    campusId: 1,
  },
  {
    firstName: "Ginny",
    lastName: "Weasley",
    email: "gweasley@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/yf6nwqj/ginny.jpg",
    gpa: 3.9,
    campusId: 1,
  },
  {
    firstName: "Luna",
    lastName: "Lovegood",
    email: "llovegood@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/mTsjh1W/Luna.webp",
    gpa: 3.9,
    campusId: 1,
  },
  {
    firstName: "Viktor",
    lastName: "Krum",
    email: "vkrum@durmstrang.eu",
    imageUrl: "https://i.ibb.co/c2WNq2D/krum.webp",
    gpa: 2.4,
    campusId: 3,
  },
  {
    firstName: "Fluer",
    lastName: "Delacour",
    email: "fleur@beauxbatons.fr",
    imageUrl: "https://i.ibb.co/c2WNq2D/krum.webp",
    gpa: 3.4,
    campusId: 2,
  },
];

const studentGenerator = () => {
  const randomIdx = () => Math.floor(Math.random() * names.length);
  const randomFirstName = names[randomIdx()];
  const randomLastName =
    names[randomIdx()] === randomFirstName
      ? names[randomIdx() + 1]
      : names[randomIdx()];
  const randomGpa = Math.round((Math.random() * (4 - 1) + 1) * 10) / 10;
  return {
    firstName: randomFirstName,
    lastName: randomLastName,
    email: `${randomFirstName.charAt(0)}${randomLastName}@wizardingworld.co.uk`,
    imageUrl: faker.image.avatar(),
    gpa: randomGpa,
    campusId: Math.floor(Math.random() * campuses.length + 1),
  };
};

const campusGenerator = () => {
  const name = unique[Math.floor(Math.random() * unique.length)];
  const institution = school[Math.floor(Math.random() * school.length)];
  const of = grammar[Math.floor(Math.random() * grammar.length)];
  const magica = magic[Math.floor(Math.random() * magic.length)];
  const descrip = [];
  Array.from({ length: 10 }).forEach(() => {
    descrip.push(faker.hacker.phrase());
  });

  return {
    name: `${name} ${institution} ${of} ${magica}`,
    imageUrl: faker.image.avatar(),
    address: faker.address.city(),
    description: descrip.join(" "),
  };
};

Array.from({ length: 100 }).forEach(() => {
  campuses.push(campusGenerator());
});

Array.from({ length: 200 }).forEach(() => {
  students.push(studentGenerator());
});

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      campuses.map((campus) => {
        return Campuses.create(campus);
      })
    );

    await Promise.all(
      students.map((student) => {
        return Students.create(student);
      })
    );

    console.log(green("WINGARDIUM LEVIOSA! Seeding successful!"));
    db.close();
  } catch (err) {
    console.error(red("Bloody Hell! Something went wrong!"));
    console.error(err);
    db.close();
  }
};

seed();
