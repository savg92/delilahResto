const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idItem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idItem"
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orderId",
      // references: {
      //   key: "idOrder",
      //   model: "orders_model"
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
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quantity"
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      // defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "price"
    }
  };
  const options = {
    tableName: "items",
    comment: "",
    // indexes: [{
    //   name: "FK to product_idx",
    //   unique: false,
    //   type: "BTREE",
    //   fields: ["productId"]
    // }, {
    //   name: "FK to order_idx",
    //   unique: false,
    //   type: "BTREE",
    //   fields: ["orderId"]
    // }]
  };
  const Item = sequelize.define("Item", attributes, options);

  Item.associate = models => {
    Item.belongsTo(models.Product, {
      foreignKey: 'productId'
    });
    Item.belongsTo(models.Order, {
      foreignKey: 'orderId'
  });
  }

  return Item;
};