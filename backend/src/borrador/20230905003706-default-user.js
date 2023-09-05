"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("users", [
			{
				id: "default-user-id", // Cambia esto a un UUID válido
				username: "defaultuser",
				// ... otras columnas
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("users", { id: "default-user-id" });
	},
};
