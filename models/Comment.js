const { Model, DatTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Comment extends Model { }
Comment.init(
    {
        id: {
            type: DatTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content_text: {
            type: DatTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DatTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        },
        post_id: {
            type: DatTypes.INTEGER,
            references: {
                model: "posts",
                key: "id"
            },

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: "comment"
    }
);

module.exports = Comment;
