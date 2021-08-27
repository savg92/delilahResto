'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        "firstName" : "admin",
        "lastname" : "admin",
        "userName" : "aadmin",
        "password" : "123",
        "email" : "admin@admin.com",
        "phone" : "1123594837",
        "address" : "av. siempre viva 123",
        "isAdmin" : "admin",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      },
      {
        "firstName" : "alex",
        "lastname" : "fox",
        "userName" : "afox",
        "password" : "123",
        "email" : "afox@gmail.com",
        "phone" : "1123594352",
        "address" : "av rivadavia 2423",
        "isAdmin" : "client",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      },
      {
        "firstName" : "jane",
        "lastname" : "fox",
        "userName" : "jfox",
        "password" : "123",
        "email" : "jfox@gmail.com",
        "phone" : "1123594352",
        "address" : "av rivadavia 1423",
        "isAdmin" : "client",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      },
      {
        "firstName" : "roxy",
        "lastname" : "fox",
        "userName" : "rfox",
        "password" : "123",
        "email" : "rfox@gmail.com",
        "phone" : "1123594643",
        "address" : "av rivadavia 634",
        "isAdmin" : "client",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      },
      {
        "firstName" : "ursula",
        "lastname" : "fox",
        "userName" : "ufox",
        "password" : "123",
        "email" : "ufox@gmail.com",
        "phone" : "1123594352",
        "address" : "av rivadavia 2423",
        "isAdmin" : "client",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      },
      {
        "firstName" : "otto",
        "lastname" : "fox",
        "userName" : "ofox",
        "password" : "123",
        "email" : "ofox@gmail.com",
        "phone" : "1123594352",
        "address" : "av rivadavia 1423",
        "isAdmin" : "admin",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      },
      {
        "firstName" : "toto",
        "lastname" : "fox",
        "userName" : "tfox",
        "password" : "123",
        "email" : "tfox@gmail.com",
        "phone" : "1123594352",
        "address" : "av rivadavia 1423",
        "isAdmin" : "client",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      },
      {
        "firstName" : "kevin",
        "lastname" : "fox",
        "userName" : "kfox",
        "password" : "123",
        "email" : "kfox@gmail.com",
        "phone" : "1123594352",
        "address" : "av rivadavia 1423",
        "isAdmin" : "client",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      },
      {
        "firstName" : "bacon",
        "lastname" : "fox",
        "userName" : "bfox",
        "password" : "123",
        "email" : "bfox@gmail.com",
        "phone" : "1123594352",
        "address" : "av rivadavia 1423",
        "isAdmin" : "client",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      },
      {
        "firstName" : "zully",
        "lastname" : "fox",
        "userName" : "zfox",
        "password" : "123",
        "email" : "zfox@gmail.com",
        "phone" : "1123594352",
        "address" : "av rivadavia 2423",
        "isAdmin" : "client",
        "createdAt" : "2021-08-25 22:21:04",
        "updatedAt" : "2021-08-25 22:21:04"
      }
     ], {});
   
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
