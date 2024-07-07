const {Users} = require("../models");
const userData = [{
    username: "John",
    password: "Password1",
}];
const seedUsers =() => Users.bulkCreate(userData);
module.exports = seedUsers;
