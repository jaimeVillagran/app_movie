// /infrastructure/api/controllers/userController.js

const { check, validationResult } = require("express-validator");
const { User } = require("../../db/models");
const UserDTO = require("../../../application/dto/UserDTO");

exports.validateUser = [
	check("email").isEmail().withMessage("Debe ser un email válido"),
	check("password")
		.isLength({ min: 6 })
		.withMessage("La contraseña debe tener al menos 6 caracteres"),
	check("name").not().isEmpty().withMessage("El nombre es obligatorio"),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await User.findAll();
		const usersDTO = users.map((user) => new UserDTO(user));
		res.json(usersDTO);
	} catch (error) {
		next(error);
	}
};

exports.getUserById = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}
		const userDTO = new UserDTO(user);
		res.json(userDTO);
	} catch (error) {
		next(error);
	}
};

exports.createUser = async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		const userDTO = new UserDTO(user);
		res.status(201).json(userDTO);
	} catch (error) {
		next(error);
	}
};

exports.updateUser = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}
		await user.update(req.body);
		const userDTO = new UserDTO(user);
		res.json(userDTO);
	} catch (error) {
		next(error);
	}
};

exports.deleteUser = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}
		await user.destroy();
		res.status(204).send();
	} catch (error) {
		next(error);
	}
};

module.exports = exports;
