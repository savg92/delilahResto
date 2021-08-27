// const {
//   DataTypes
// } = require('sequelize');

module.exports = (sequelize,DataTypes) => {
  const attributes = {
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idUser"
    }
    ,
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "firstName"
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "lastname"
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "userName",
      unique: "User_name_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "password"
    },
    email: {
      type: DataTypes.STRING(320),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email",
      unique: "Email_UNIQUE"
    },
    phone: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone"
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address"
    },
    isAdmin: {
      type: DataTypes.ENUM('admin', 'client'),
      allowNull: false,
      defaultValue: "client",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "isAdmin"
    }
  };
  const options = {
    tableName: "users",
    comment: "",
    indexes: []
  };
  const User = sequelize.define("User", attributes, options);
  
  User.associate = models => {
    User.hasMany(models.Order, {
      foreignKey: 'userId'
    }
    );
    User.hasMany(models.Favorite,{
      foreignKey: 'userId'
    })
  }
  
  return User;
};