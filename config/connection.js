const Sequelize = requre("sequelize")
require("dotenv").config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
    {
        host: "local host",
        dialect: "postgres"

    });

 module.exports = sequelize;
