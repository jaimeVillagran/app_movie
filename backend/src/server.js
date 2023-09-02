require("dotenv").config();

const express = require("express");
const cors = require("cors");
const authRoutes = require("./interface/routes/authRoutes");
const userRoutes = require("./interface/routes/userRoutes");
const errorHandler = require("./infrastructure/api/middleware/errorHandler");
const app = express();

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Usa el middleware CORS para permitir solicitudes desde cualquier origen (en desarrollo)
app.use(cors());

// Rutas
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// Ruta por defecto
app.get("/", (req, res) => {
	res.send("API de Películas");
});

// Ruta por defecto para manejar errores 404
app.use((req, res) => {
	res.status(404).send("Not Found");
});

// Middleware para manejar errores generales
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app; // Esto es útil si quieres exportar tu app, por ejemplo para pruebas.
