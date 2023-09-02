const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class AuthService {
	constructor(userRepository) {
		this.userRepository = userRepository;
		this.secretKey = process.env.JWT_SECRET_KEY || "SECRET_KEY";
	}

	async authenticate(email, password) {
		const user = await this.userRepository.findByEmail(email);
		if (!user) {
			throw new Error("Usuario no encontrado");
		}

		const validPassword = await this._comparePasswords(password, user.password);
		if (!validPassword) {
			throw new Error("Contraseña incorrecta");
		}

		return this._generateToken(user);
	}

	async register(email, password) {
		const existingUser = await this.userRepository.findByEmail(email);
		if (existingUser) {
			throw new Error("El correo electrónico ya está registrado");
		}

		const hashedPassword = await this._hashPassword(password);
		return this.userRepository.save({ email, password: hashedPassword });
	}

	_generateToken(user) {
		const payload = {
			userId: user.id,
			email: user.email,
		};

		return jwt.sign(payload, this.secretKey, {
			expiresIn: "1h",
		});
	}

	async _comparePasswords(inputPassword, storedPassword) {
		return bcrypt.compare(inputPassword, storedPassword);
	}

	async _hashPassword(password) {
		return bcrypt.hash(password, 10);
	}
}

module.exports = AuthService;
