const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../sequelize");

class Movie extends Model {}

Movie.init(
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: uuidv4,
			allowNull: false,
		},
		displayId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		releaseDate: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		duration: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		genre: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		director: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mainActors: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		rating: {
			type: DataTypes.DECIMAL,
			allowNull: true,
		},
		posterUrl: {
			type: DataTypes.STRING,
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
