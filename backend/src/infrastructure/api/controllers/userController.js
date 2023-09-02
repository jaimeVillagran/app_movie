const { validationResult } = require("express-validator");
const UserService = require("../../application/services/UserService");
const userService = new UserService();

exports.createUser = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const user = await userService.createUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		next(error);
	}
};

exports.getProfile = async (req, res, next) => {
	try {
		const user = await userService.getUserById(req.user.userId);
		res.json(user);
	} catch (error) {
		next(error);
	}
};

exports.updateProfile = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const updatedUser = await userService.updateUser(req.user.userId, req.body);
		res.json(updatedUser);
	} catch (error) {
		next(error);
	}
};
