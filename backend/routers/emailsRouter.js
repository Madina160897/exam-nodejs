const express = require("express");
const { EmailModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
    EmailModel.find({}, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    EmailModel.findById(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

router.post("/", (req, res) => {
    const { email, password, name, surname, age } = req.body;
    const newUser = new EmailModel({ email, password, name, surname, age });
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
    EmailModel.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    });
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const { email, password, name, surname, age } = req.body;
    await EmailModel.findByIdAndUpdate(id, { email: email, password: password, name: name, surname: surname, age: age, }, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("phone updated");
        }
    })
});

module.exports = router;