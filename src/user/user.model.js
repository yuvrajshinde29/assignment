const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/db_config')
class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Name can not be Empty." },
        len: { args: [2, 30], msg: "Name must be 2 - 30 character." },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: { msg: "Email must be un0ique." },
      allowNull: false,
      validate: {
        notNull: { msg: "Email can not be null" },
        isEmail: { msg: "Invalid Email format" },
      },
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
