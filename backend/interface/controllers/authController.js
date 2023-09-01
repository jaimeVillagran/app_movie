const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Suponiendo que tienes un modelo User importado
const User = require("../models/User");

exports.login = async (req, res) => {
	const { email, password } = req.body;

	// Buscar al usuario por correo electrónico
	const user = await User.findOne({ where: { email } });

	if (!user) {
		return res.status(400).send("Usuario no encontrado");
	}

	// Verificar la contraseña
	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword) {
		return res.status(400).send("Contraseña incorrecta");
	}

	// Generar el token JWT
	const payload = {
		userId: user.id,
		email: user.email,
	};

	const secretKey = "SECRET_KEY"; // Debes usar una clave secreta real y segura

	const token = jwt.sign(payload, secretKey, {
		expiresIn: "1h",
	});

	// Enviar el token al cliente
	res.send(token);
};
