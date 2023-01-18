const express = require("express");
const { EmailModel, PostModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
    PostModel.find({}, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
})

router.post("/", async (req, res) => {
    const { userId, title, post, img } = req.body;

    const user = await EmailModel.findById(userId);

    const newPost = new PostModel({ user, title, post, img });
    newPost.save((err) =>{ 
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send("Added new post");
        }
    });
})

module.exports = router;