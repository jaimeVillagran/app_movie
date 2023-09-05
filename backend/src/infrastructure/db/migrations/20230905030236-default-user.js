"use strict";
const bcrypt = require("bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const hashedPassword = await bcrypt.hash("defaultPassword", 10);

		await queryInterface.bulkInsert("users", [
			{
				id: Sequelize.literal("UUID()"),
				username: "defaultuser",
				email: "default@email.com",
				password: hashedPassword,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("users", { username: "defaultuser" });
	},
};
