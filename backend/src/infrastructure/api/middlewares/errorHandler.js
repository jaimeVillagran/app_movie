function errorHandler(err, req, res, next) {
	console.error(err.stack); // Esto imprimirá el error en la consola

	if (err.message) {
		return res.status(400).send({ error: err.message });
	}

	// Puedes agregar más condiciones para manejar diferentes tipos de errores aquí

	res.status(500).send({ error: "Algo salió mal!" });
}

module.exports = errorHandler;
