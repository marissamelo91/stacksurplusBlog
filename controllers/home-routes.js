const router = require("express").Router();
const { Users, Post, Comment } = require("../models");
const auth = require("../middlewares/auth");

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: Users, attributes: ["username"] }]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("home-page", { posts, login: req.session.login });

    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/dashboard", auth, async (req, res) => {
    try {

        const userData = await Users.findOne({
            where: { id: req.session.user_id },
            include: [{ model: Post }]
        });
        console.log(userData);
        const posts = userData.posts.map(post => post.get({
            plain: true

        }));
        res.render("dashboard", { posts, login: req.session.login });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;