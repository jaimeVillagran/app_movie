const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../infrastructure/db/sequelize");

class Movie extends Model {}

Movie.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		releaseYear: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: "Movie",
		tableName: "movies",
		timestamps: false,
	}
);

module.exports = Movie;
