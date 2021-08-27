const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idOrder"
    },
    status: {
      type: DataTypes.ENUM('borrador', 'creado', 'confirmado', 'en preparacion', 'en camino', 'entregado', 'cancelado'),
      allowNull: false,
      defaultValue: "borrador",
      primaryKey: false,
      autoIncrement: false,
      comment: "borrador\ncreado\nconfirmado\nen preparación\npreparado\nen camino\nentregado\ncancelado",
      field: "status"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userId",
      // references: {
      //   key: "idUser",
      //   model: "users_model"
      // }
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "totalPrice"
    },
    paymentMethod: {
      type: DataTypes.ENUM('efectivo', 'tarjeta'),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: "efectivo\ntarjeta",
      field: "paymentMethod"
    }
  };
  const options = {
    tableName: "orders",
    comment: "",
    // indexes: [{
    //   name: "FK Cart to Users_idx",
    //   unique: false,
    //   type: "BTREE",
    //   fields: ["userId"]
    // }]
  };
  const Order = sequelize.define("Order", attributes, options);

  Order.associate = models => {
    Order.hasMany(models.Item,{
      foreignKey: 'orderId'
    });
    Order.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  }

  return Order;
};