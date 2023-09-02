const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post(
	"/register",
	[
		body("email").isEmail().withMessage("Ingrese un correo electrónico válido"),
		body("password")
			.isLength({ min: 6 })
			.withMessage("La contraseña debe tener al menos 6 caracteres"),
		body("name").not().isEmpty().withMessage("El nombre es obligatorio"),
	],
	userController.createUser
);

// Ruta para obtener el perfil del usuario
router.get("/profile", authMiddleware, userController.getProfile);

// Ruta para actualizar el perfil del usuario
router.put(
	"/profile",
	authMiddleware,
	[
		body("email")
			.optional()
			.isEmail()
			.withMessage("Ingrese un correo electrónico válido"),
		body("name")
			.optional()
			.not()
			.isEmpty()
			.withMessage("El nombre es obligatorio"),
	],
	userController.updateProfile
);

module.exports = router;
