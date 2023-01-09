module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("fotos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      originalname: {
        type: Sequelize.STRING,
        allNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allNull: false,
      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allNull: true,
        references: {
          model: "alunos",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
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

  down: (queryInterface) => queryInterface.dropTable("fotos"),
};
