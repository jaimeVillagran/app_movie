const { Sequelize } = require("sequelize");
const config = require("../config/config").development;

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		dialect: "mariadb",
		logging: false, // Desactiva los logs de SQL en la consola
	}
);

module.exports = sequelize;
