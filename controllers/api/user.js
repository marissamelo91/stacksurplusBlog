// The line imports the Router functionality from the Express.js library, which allows you to define
// routes for the application. Routes handle HTTP requests.
const router = require("express").Router();
// The line imports the User model from the models directory, which represents the User entity in the database
const { Users, Post, Comment} = require("../../models");
// The line defines a route for GET requests to the /api/users endpoint
router.post("/login", async (req, res) => {
    const user = await Users.findOne({ where: { username: req.body.username } });
    console.log("user:", user)
    console.log("req.body.username:", req.body.username)
    console.log("req.body.password:", req.body.password)
    console.log("!user.checkPassword(req.body.password)", user.checkPassword(req.body.password))

// Checks to see if the users credentials username and password or valid.
// Calls a checkPassword method on the user object passing in the password from the request body.
    if (!user || !user.checkPassword(req.body.password)) {
        res.status(400).json({ message: "username or password is not correct" });
        return;
    }
    req.session.save(() => {
        req.session.user_id = user.id;
        req.session.login = true;
        res.status(200).json({ user, message: "You are logged in!" })
    });

});
//Defines a route handler for a POST request to the logout URL path.
router.post("/logout", async (req, res) => {
    if (req.session.login) {

        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        //Sends an HTTP response with a status code of 404. Ends the response
        //without sending any data back to the client.
        res.status(404).end();
    }


});
router.post("/signup", async (req, res) => {
    const user = await Users.findOne({ where: { username: req.body.username } })
    if (user) {
        res.status(400).json({ message: "username already exists" })
        return;
    }
    const newUser = await Users.create(req.body)
    req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.login = true;
        res.status(200).json({ user, message: "You are logged in!" })
    });

});
// Defines a router handler for a POST requests to the dashboard URL path.
router.post("/dashboard", async (req, res) => {
// Creates a new post in the database using the Post Model
    const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
    });
    res.status(200).json({ post, message: "New Post is Created!" })

});
// Defines a route handler for a PUT request to the dashboard/post/id URL path
// :id is a route parameter that represents the ID of the post to be updated.
router.put("/dashboard/post/:id", async (req, res) => {
    // Updates an existing post in the database using the Post Model
    await Post.update({
        title: req.body.title,
        content: req.body.content,
    }, {
        where: { id: req.params.id }
    });
    res.status(200).json({ message: "Post is Updated!" })
});
// Defines a route handler for a DELETE request to the dashboard/post/id URL path.
router.delete("/dashboard/post/:id", async (req, res) => {
    //Deletes an exisiting post from the database using the Post Model.
    await Post.destroy({
        where: { id: req.params.id }
    });
    res.status(200).json({ message: "Post is Deleted!" })
});
router.post("/post/:id", async (req, res) => {
    const comment = await Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.params.id
    });
    res.status(200).json({ message: "New Comment is Created!" })


})
module.exports = router;
