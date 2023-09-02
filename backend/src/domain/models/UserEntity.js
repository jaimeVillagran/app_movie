const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../infrastructure/db/sequelize");
/*module.exports = (sequelize) => {*/

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
