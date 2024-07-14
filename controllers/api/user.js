const router = require("express").Router();
const { Users, Post, Comment} = require("../../models");
router.post("/login", async (req, res) => {
    const user = await Users.findOne({ where: { username: req.body.username } });
    console.log("user:", user)
    console.log("req.body.username:", req.body.username)
    console.log("req.body.password:", req.body.password)
    console.log("!user.checkPassword(req.body.password)", user.checkPassword(req.body.password))


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
router.post("/logout", async (req, res) => {
    if (req.session.login) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
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

router.post("/dashboard", async (req, res) => {
    const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
    });
    res.status(200).json({ post, message: "New Post is Created!" })

});

router.put("/dashboard/post/:id", async (req, res) => {
    await Post.update({
        title: req.body.title,
        content: req.body.content,
    }, {
        where: { id: req.params.id }
    });
    res.status(200).json({ message: "Post is Updated!" })
});

router.delete("/dashboard/post/:id", async (req, res) => {
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
