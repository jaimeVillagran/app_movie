const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY; // Cambia esto por una clave secreta fuerte

exports.generateToken = (user) => {
	const payload = {
		userId: user.id,
		email: user.email,
	};
	return jwt.sign(payload, secretKey, {
		expiresIn: "1h",
	});
};

exports.verifyToken = (token) => {
	try {
		return jwt.verify(token, secretKey);
	} catch (err) {
		return null;
	}
};
