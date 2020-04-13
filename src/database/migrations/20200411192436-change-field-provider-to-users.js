module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'provider', {
      type: `${Sequelize.BOOLEAN} USING CAST("provider" as ${Sequelize.BOOLEAN})`,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'provider', {
      type: Sequelize.STRING,
      defaultValue: false,
    });
  },
};
