const Users = require("./Users");
const Post = require("./Post");
const Comment = require("./Comment");
Users.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
Users.hasMany(Comment,{
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
Comment.belongsTo(Users,{
    foreignKey: "user_id"
});
customElements.belongsTo(Post,{
    foreignKey: "post_id"
});
Post.hasMany(Comment,{
    foreignKey: "post_id"
});
Post.belongsTo(Users,{
    foreignKey: "user_id"
});
module.exports ={Users, Post, Comment};
