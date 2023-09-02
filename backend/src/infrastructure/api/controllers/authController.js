const AuthService = require("../../application/services/AuthService");
const UserRepository = require("../../infrastructure/db/repositories/UserRepository");

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

exports.login = async (req, res) => {
	try {
		const token = await authService.authenticate(
			req.body.email,
			req.body.password
		);
		res.send(token);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

exports.register = async (req, res) => {
	try {
		await authService.register(req.body.email, req.body.password);
		res.status(201).send("Usuario registrado con éxito");
	} catch (error) {
		res.status(400).send(error.message);
	}
};
