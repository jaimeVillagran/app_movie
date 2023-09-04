const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize"); // Asegúrate de ajustar la ruta a tu archivo de inicialización de Sequelize

class Movie extends Model {}

Movie.init(
    {
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
        }
    },
    {
        sequelize,
        modelName: "Movie",
        tableName: "movies", // Si deseas un nombre específico para la tabla, de lo contrario, Sequelize usará "Movies" por defecto.
        timestamps: false,   // Si no deseas que Sequelize maneje automáticamente los campos `createdAt` y `
