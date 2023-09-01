const { verifyToken } = require("../../application/helpers/authHelper");

function authenticateJWT(req, res, next) {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(401).json({ message: "Token no proporcionado" });
	}

	const user = verifyToken(token);

	if (!user) {
		return res.status(403).json({ message: "Token inválido o expirado" });
	}

	req.user = user;
	next();
}

module.exports = authenticateJWT;
