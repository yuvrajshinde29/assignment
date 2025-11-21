const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || "assignment_db",
  process.env.USER_NAME || "postgres",
  process.env.PASSWORD || "Nimap@29",
  {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT || "postgres",
    logging: false,
    pool: {
      min: 0,
      max: 5,
      acquire: 3000,
      ideal: 1000,
    },
  }
);

module.exports = sequelize;
