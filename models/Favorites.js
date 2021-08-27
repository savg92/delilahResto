const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idFavorite: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idFavorite"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userId",
      // references: {
      //   key: "idUser",
      //   model: "users_model"
      // }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "productId",
      // references: {
      //   key: "idProduct",
      //   model: "products_model"
      // }
    }
  };
  const options = {
    tableName: "favorites",
    comment: "",
    // indexes: [{
    //   name: "FK fav to users_idx",
    //   unique: false,
    //   type: "BTREE",
    //   fields: ["userId"]
    // }, {
    //   name: "FK fav to products_idx",
    //   unique: false,
    //   type: "BTREE",
    //   fields: ["productId"]
    // }]
  };
  const Favorite = sequelize.define("Favorite", attributes, options);

  Favorite.associate = models => {
    Favorite.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Favorite.belongsTo(models.Product, {
      foreignKey: 'productId'
    });
  }

  return Favorite;
};