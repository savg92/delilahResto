'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "items", [
        {
          "orderId" : 3,
          "productId" : 1,
          "quantity" : 3,
          "price" : null,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "orderId" : 4,
          "productId" : 2,
          "quantity" : 3,
          "price" : null,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "orderId" : 5,
          "productId" : 1,
          "quantity" : 5,
          "price" : null,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "orderId" : 7,
          "productId" : 1,
          "quantity" : 2,
          "price" : null,
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
