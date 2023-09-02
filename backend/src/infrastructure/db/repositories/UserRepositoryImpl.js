const { User } = require("../../domain/models");
const UserRepository = require("../../domain/repositories/UserRepository");

class UserRepositoryImpl extends UserRepository {
	async create(userData) {
		try {
			const user = await User.create(userData);
			return user;
		} catch (error) {
			throw new Error(error);
		}
	}

	async findByEmail(email) {
		try {
			const user = await User.findOne({ where: { email } });
			return user;
		} catch (error) {
			throw new Error(error);
		}
	}

	// Implementación de otros métodos...
}

module.exports = new UserRepositoryImpl();
