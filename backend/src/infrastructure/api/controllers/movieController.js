const { check, validationResult } = require("express-validator");
const { Movie } = require("../../db/models");
const MovieDTO = require("../../../application/dto/MovieDTO");

exports.validateMovie = [
	check("title").not().isEmpty().withMessage("El título es obligatorio"),
	check("description")
		.isLength({ max: 500 })
		.withMessage("La descripción no puede exceder los 500 caracteres"),
	check("releaseDate").isDate().withMessage("Debe ser una fecha válida"),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

exports.getAllMovies = async (req, res, next) => {
	const movies = await Movie.findAll();
	const moviesDTO = movies.map((movie) => new MovieDTO(movie));
	res.json(moviesDTO);
};

exports.getMovieById = async (req, res, next) => {
	const movie = await Movie.findByPk(req.params.id);
	if (!movie) {
		return res.status(404).json({ message: "Película no encontrada" });
	}
	const movieDTO = new MovieDTO(movie);
	res.json(movieDTO);
};

exports.createMovie = async (req, res, next) => {
	const movie = await Movie.create(req.body);
	const movieDTO = new MovieDTO(movie);
	res.status(201).json(movieDTO);
};

exports.updateMovie = async (req, res, next) => {
	const movie = await Movie.findByPk(req.params.id);
	if (!movie) {
		return res.status(404).json({ message: "Película no encontrada" });
	}
	await movie.update(req.body);
	const movieDTO = new MovieDTO(movie);
	res.json(movieDTO);
};

exports.deleteMovie = async (req, res, next) => {
	const movie = await Movie.findByPk(req.params.id);
	if (!movie) {
		return res.status(404).json({ message: "Película no encontrada" });
	}
	await movie.destroy();
	res.status(204).send();
};

module.exports = exports;
