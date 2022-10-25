const { expect } = require("chai");
const {
  db,
  models: { Product },
} = require("../index");
const seed = require("../../../script/seed");

describe("Product model", () => {
  let products;
  beforeEach(async () => {
    products = (await seed()).products;
  });

  describe("instanceMethods", () => {});
});
//test
