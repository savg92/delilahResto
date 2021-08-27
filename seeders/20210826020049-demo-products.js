'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products", [
        {
          "productName" : "hamburguesa simple",
          "shortName" : null,
          "unitPrice" : 550,
          "description" : "pan y carne",
          "imgProduct" : null,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "productName" : "hamburguesa completa",
          "shortName" : null,
          "unitPrice" : 730,
          "description" : "pan, carne, queso, huevo frito",
          "imgProduct" : null,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "productName" : "pasta bolognesa",
          "shortName" : null,
          "unitPrice" : 350,
          "description" : "spaghetti, salsa bolognesa",
          "imgProduct" : null,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "productName" : "lasagna",
          "shortName" : null,
          "unitPrice" : 500,
          "description" : "lasagna de carne",
          "imgProduct" : null,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "productName" : "gnoquis",
          "shortName" : null,
          "unitPrice" : 400,
          "description" : "gnoques de rucula con salsa blanca",
          "imgProduct" : null,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "productName" : "atun",
          "shortName" : null,
          "unitPrice" : 850,
          "description" : "atun en salsa blanca",
          "imgProduct" : null,
          "createdAt" : "2021-08-25 22:21:21",
          "updatedAt" : "2021-08-25 22:21:21"
        },
        {
          "productName" : "atun a la parrilla",
          "shortName" : null,
          "unitPrice" : 890,
          "description" : "atun a la parrilla",
          "imgProduct" : null,
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
