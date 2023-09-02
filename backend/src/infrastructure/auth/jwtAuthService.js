const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

function generateToken(data) {
	return jwt.sign(data, SECRET_KEY, { expiresIn: "1h" });
}

function verifyToken(token) {
	try {
		return jwt.verify(token, SECRET_KEY);
	} catch (err) {
		throw new Error("Token no es válido");
	}
}

module.exports = {
	generateToken,
	verifyToken,
};
