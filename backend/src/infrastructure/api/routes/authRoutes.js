const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const { User } = require("../../domain/user");

const router = express.Router();

// Ruta de registro con validaciones
router.post(
	"/register",
	[
		check("email")
			.isEmail()
			.withMessage("Ingrese un correo electrónico válido."),
		check("password")
			.isLength({ min: 6 })
			.withMessage("La contraseña debe tener al menos 6 caracteres."),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const { email, password, name } = req.body;

			// Verificar si el usuario ya existe
			const existingUser = await User.findOne({ where: { email } });
			if (existingUser) {
				return res.status(400).send({
					success: false,
					message: "El correo electrónico ya está registrado.",
				});
			}

			// Cifrar la contraseña
			const hashedPassword = await bcrypt.hash(password, 10);

			// Crear el usuario
			await User.create({
				email,
				password: hashedPassword,
				name,
			});

			res
				.status(201)
				.json({ success: true, message: "Usuario registrado con éxito." });
		} catch (error) {
			console.error(error); // Esto imprimirá el error en la consola
			res.status(500).send({
				success: false,
				message: "Error al registrar el usuario: " + error.message,
			});
		}
	}
);

// Ruta de inicio de sesión
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		// Buscar al usuario
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return res.status(400).json({
				success: false,
				message: "Correo electrónico o contraseña incorrectos.",
			});
		}

		// Verificar la contraseña
		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return res.status(400).json({
				success: false,
				message: "Correo electrónico o contraseña incorrectos.",
			});
		}

		// Generar el token JWT
		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		res.json({ success: true, token });
	} catch (error) {
		console.error(error); // Esto imprimirá el error en la consola
		res.status(500).send({
			success: false,
			message: "Error al iniciar sesión: " + error.message,
		});
	}
});

module.exports = router;
