const { Model, DatTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
class Users extends Model { }
Users.init({
    id: {
        type: DatTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DatTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 30]
        }
    },
    password: {
        type: DatTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 30]
        }
    }


}, {
    hooks: {
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            return user;
        }
    },
    sequelize,
    freezeTableName: true,
    modelName: "users"
});

module.exports = Users;



