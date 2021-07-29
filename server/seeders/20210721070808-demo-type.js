'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredientTypes', [{
        name: 'main',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'bread',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'vege',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'addable',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'addmeat',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ingredientTypes', null, {});
  },
};