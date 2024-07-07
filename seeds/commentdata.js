const { Comment } = require("../models");
const commentData= [{
    comment: "This is a comment",
    user_id: 1,
    post_id: 1
},
{
    comment: "This is another comment",
    user_id: 1,
    post_id: 1
}];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;

