"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("movies", "id", {
			type: Sequelize.UUID,
			defaultValue: Sequelize.literal("UUID()"),
			allowNull: false,
			primaryKey: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("movies", "id");
	},
};
