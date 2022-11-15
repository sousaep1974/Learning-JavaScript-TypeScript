const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert("users", [
      {
        nome: "Edivan1",
        email: "edivan1@site.com",
        password_hash: await bcryptjs.hash("1234567", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Edivan2",
        email: "edivan2@site.com",
        password_hash: await bcryptjs.hash("1234568", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Edivan3",
        email: "edivan3@site.com",
        password_hash: await bcryptjs.hash("1234569", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Edivan4",
        email: "edivan4@site.com",
        password_hash: await bcryptjs.hash("12345610", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: () => {},
};
