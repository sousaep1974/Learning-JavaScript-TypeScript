module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("alunos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        type: Sequelize.STRING,
        allNull: false,
      },

      sobrenome: {
        type: Sequelize.STRING,
        allNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allNull: false,
      },

      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      altura: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("alunos"),
};
