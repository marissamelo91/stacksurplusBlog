const router = require("express").Router();
const { Users, Post, Comment } = require("../models");

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

module.exports = router;