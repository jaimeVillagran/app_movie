const { verifyToken } = require("../../infrastructure/auth/jwtAuthService");

function authenticateJWT(req, res, next) {
	const token = req.headers.authorization;

	if (!token) {
		return next(new Error("Token no proporcionado"));
	}

	try {
		const user = verifyToken(token);
		req.user = user;
		next();
	} catch (error) {
		next(new Error("Token inválido o expirado"));
	}
}

module.exports = authenticateJWT;
