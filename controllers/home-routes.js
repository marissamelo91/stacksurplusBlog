const router = require("express").Router();
const { Users, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: Users, attributes: ["username"] }]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("home-page", {posts});

    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;