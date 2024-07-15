//Imports the sequelize library to interact with databases using Javascript
const Sequelize = require("sequelize")
//Loads environment variable file to store sensitive information 
require("dotenv").config();
//Creates a new Sequelize instance of the Sequelize object and checks if the DB_URL environment variable is set.
const sequelize = process.env.DB_URL ?
    new Sequelize(process.env.DB_URL) :
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "postgres"

        });

module.exports = sequelize;
