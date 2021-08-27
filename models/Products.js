const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idProduct"
    },
    productName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "productName"
    },
    shortName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shortName"
    },
    unitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "unitPrice"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    imgProduct: {
      type: DataTypes.STRING(255),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "imgProduct"
    }
  };
  const options = {
    tableName: "products",
    comment: "",
    indexes: []
  };
  const Product = sequelize.define("Product", attributes, options);

  Product.associate = models => {
    Product.hasMany(models.Favorite,{
      foreignKey: 'productId'
    });
    Product.hasMany(models.Item,{
      foreignKey: 'productId'
    });
  }

  return Product;
};