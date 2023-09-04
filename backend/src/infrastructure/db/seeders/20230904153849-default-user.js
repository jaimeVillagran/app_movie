const bcrypt = require("bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Users", [
			{
				email: "admin@example.com",
				password: await bcrypt.hash("password123", 10),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};
