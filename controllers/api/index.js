//Imports the router function from the express.js library
//The function is used to create a new instance of a router object, which is responsible for Handling Http requests and defining routes in an Express Application
const router = require("express").Router ();
const userRoutes = require("./user");

//The line mounts the imported module onto the /user path of the main router
router.use("/user", userRoutes)
//The line exports the router object, making it available for use in other parts of the application
module.exports = router;