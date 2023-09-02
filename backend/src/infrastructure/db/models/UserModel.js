const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize"); // Asegúrate de ajustar la ruta a tu archivo de inicialización de Sequelize

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "User",
		tableName: "users",
		timestamps: false,
	}
);

module.exports = User;
