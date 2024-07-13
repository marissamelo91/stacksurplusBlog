const {Users} = require("../models");
const userData = [{
    username: "John",
    password: "123456",
}];
const seedUser =() => Users.bulkCreate(userData,{individualHooks:true});

module.exports = seedUser;