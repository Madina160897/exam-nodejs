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

router.post("/", async (req, res) => {
    const { userId, post, img, } = req.body;

    const owner = await EmailModel.findById(userId);

    const newCar = new PostModel({ owner, post, img, ownersHistory: [] });
    newCar.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("ok");
        }
    });
})

// router.post("/changeOwner", async (req, res) => {
//     const { newOwnerId, carId } = req.body;

//     const car = await PostModel.findById(carId);
//     const newOwner = await EmailModel.findById(newOwnerId);

//     const currentOwner = car.owner;
//     car.owner = newOwner;
//     car.ownersHistory.push(currentOwner);

//     car.save((err) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(201).send("updated");
//         }
//     });
// });

module.exports = router;