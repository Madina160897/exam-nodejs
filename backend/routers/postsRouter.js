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

router.get("/:id", (req, res) => {
    const id = req.params.id;
    PostModel.findById(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

router.post("/", (req, res) => {
    const { login, password, name, surname, age } = req.body;
    const newUser = new PostModel({ login, password, name, surname, age });
    newUser.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("ok");
        }
    });
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    PostModel.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    });
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const { login, password, name, surname, age } = req.body;
    await PostModel.findByIdAndUpdate(id, { login: login, password: password, name: name, surname: surname, age: age, }, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("phone updated");
        }
    })
});

module.exports = router;