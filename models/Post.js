const { Model, DatTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Post extends Model { }
Post.init(
    {id: {
    type: DatTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
    title: {
    type: DatTypes.STRING,
    allowNull: false
},
    content: {
    type: DatTypes.STRING,
    allowNull: false
},
    user_id: {
    type: DatTypes.INTEGER,
    references: {
        model: 'users',
        key: 'id'
    }
}},{
    sequelize,
    timestamps:false,
    freezeTableName: true,
    modelName: 'users',

});

module.exports = Users;

