'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "favorites", [
        {
          "userId" : 1,
          "productId" : 1,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "userId" : 2,
          "productId" : 4,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "userId" : 3,
          "productId" : 5,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "userId" : 4,
          "productId" : 7,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "userId" : 2,
          "productId" : 1,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "userId" : 6,
          "productId" : 3,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        }
      ]
      , {});
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
