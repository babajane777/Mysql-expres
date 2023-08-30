const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");

router.get('/', userController.findAll);
router.post('/createUser', userController.create);
router.get('/:id', userController.findById);

module.exports = router;