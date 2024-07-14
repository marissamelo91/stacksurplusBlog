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
router.get("/signup", (req, res) => {
    res.render("signup");
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
router.get("/dashboard/post/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id)
        console.log("Post Data", postData);
        if (!postData) {
            res.status(404).json({ message: "No post found with this id!" });
            return;
        }
        const post = postData.get({ plain: true });
        res.render("post-editor", { post, login: req.session.login });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/post/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: Users, attributes: ["username"] }]
        })
        if (!postData) {
            res.status(404).json({ message: "No post found with this id!" });
            return;
        }
        const commentData = await Comment.findAll({
            where: { post_id: req.params.id },
            include: [{ model: Users, attributes: ["username"] }]
        })

        const post = postData.get({ plain: true });
        const comments = commentData.map(comment => comment.get({ plain: true }));
        res.render("post-comment", { post, comments, login: req.session.login });
    } catch (err) {
        console.log("Error\n", err)
        res.status(500).json(err);
    }

})
module.exports = router;