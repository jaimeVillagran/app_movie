const MovieRepository = require("../../domain/repositories/MovieRepository");
const MovieEntity = require("../../domain/models/MovieEntity");

class MovieService {
	constructor() {
		this.movieRepository = new MovieRepository();
	}

	async getAllMovies() {
		return await this.movieRepository.findAll();
	}

	async getMovieById(movieId) {
		return await this.movieRepository.findById(movieId);
	}

	async createMovie(movieData) {
		const movie = new MovieEntity(movieData);
		return await this.movieRepository.save(movie);
	}

	async updateMovie(movieId, movieData) {
		const movie = new MovieEntity(movieData);
		return await this.movieRepository.update(movieId, movie);
	}

	async deleteMovie(movieId) {
		return await this.movieRepository.delete(movieId);
	}
}

module.exports = MovieService;
