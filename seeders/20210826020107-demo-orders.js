'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders", [
        {
          "status" : "creado",
          "userId" : 1,
          "totalPrice" : 1230,
          "paymentMethod" : "tarjeta",
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "status" : "creado",
          "userId" : 2,
          "totalPrice" : 1230,
          "paymentMethod" : "tarjeta",
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "status" : "borrador",
          "userId" : 3,
          "totalPrice" : 231,
          "paymentMethod" : "tarjeta",
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "status" : "entregado",
          "userId" : 4,
          "totalPrice" : 2230,
          "paymentMethod" : "efectivo",
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "status" : "en camino",
          "userId" : 4,
          "totalPrice" : 1560,
          "paymentMethod" : "tarjeta",
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "status" : "cancelado",
          "userId" : 2,
          "totalPrice" : 930,
          "paymentMethod" : "efectivo",
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "status" : "cancelado",
          "userId" : 1,
          "totalPrice" : 330,
          "paymentMethod" : "efectivo",
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
