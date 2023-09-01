const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models"); // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta de registro
router.post("/register", async (req, res) => {
	try {
		const { email, password, name } = req.body;

		// Verificar si el usuario ya existe
		const existingUser = await User.findOne({ where: { email } });
		if (existingUser) {
			return res.status(400).send("El correo electrónico ya está registrado.");
		}

		// Cifrar la contraseña
		const hashedPassword = await bcrypt.hash(password, 10);

		// Crear el usuario
		const user = await User.create({
			email,
			password: hashedPassword,
			name,
		});

		res.status(201).send("Usuario registrado con éxito.");
	} catch (error) {
		res.status(500).send("Error al registrar el usuario.");
	}
});

// Ruta de inicio de sesión
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		// Buscar al usuario
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return res
				.status(400)
				.send("Correo electrónico o contraseña incorrectos.");
		}

		// Verificar la contraseña
		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return res
				.status(400)
				.send("Correo electrónico o contraseña incorrectos.");
		}

		// Generar el token JWT
		const token = jwt.sign({ userId: user.id }, "SECRET_KEY", {
			expiresIn: "1h",
		}); // Reemplaza 'SECRET_KEY' con una clave secreta real

		res.send({ token });
	} catch (error) {
		res.status(500).send("Error al iniciar sesión.");
	}
});

module.exports = router;
