const express = require("express");
const cors = require("cors");

const app = express();

// Usa el middleware CORS para permitir solicitudes desde cualquier origen (en desarrollo)
app.use(cors());

const PORT = 3001;

app.get("/", (req, res) => {
	res.send("API de Películas");
});

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
