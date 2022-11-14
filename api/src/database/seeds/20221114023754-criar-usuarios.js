const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert("users", [
      {
        nome: "Edivan1",
        email: "edivan1@site.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Edivan2",
        email: "edivan2@site.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Edivan3",
        email: "edivan3@site.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Edivan3",
        email: "edivan3@site.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: () => {},
};
