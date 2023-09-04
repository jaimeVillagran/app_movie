// /infrastructure/api/routes/userRoutes.js

const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.validateUser, userController.createUser);
router.put("/:id", userController.validateUser, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
