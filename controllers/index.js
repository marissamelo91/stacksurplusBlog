const router = require("express").Router()
// Imports another Module named home-routes from the same directory.
const homeRoutes = require("./home-routes");
const apiRoutes = require("./api");
// Mounts the apiRoutes Module onto the /api path of the application.
router.use("/", homeRoutes)
router.use("/api", apiRoutes)

// Exports the router object, allowing it to be imported and used in the other parts of the application.
module.exports = router;