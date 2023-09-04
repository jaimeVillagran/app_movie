const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../sequelize");

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: uuidv4,
			allowNull: false,
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
