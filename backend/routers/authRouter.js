const express = require("express");
const router = express.Router();
const controller = require("./authController")

router.post('/registration', controller.regis);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUsersId);
router.delete('/users/:id', controller.getUsersDel);
router.put('/users/:id', controller.getUsersPut);


module.exports = router