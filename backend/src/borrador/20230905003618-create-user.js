"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("users", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.literal("UUID()"),
				allowNull: false,
				primaryKey: true,
			},
			// Otros campos de la tabla de usuarios
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("users");
	},
};
