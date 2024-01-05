const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "root",
  password: process.env.dbPassword,
  database: process.env.dbName,
});

module.exports = sequelize;
