const MovieModel = require("../models/MovieModel");
const Movie = require("../../../domain/models/Movie");

class MovieRepositoryImpl {
	async save(movie) {
		const movieRecord = await MovieModel.create(movie);
		return new Movie(
			movieRecord.id,
			movieRecord.title,
			movieRecord.description,
			movieRecord.releaseDate
		);
	}

	async findById(id) {
		const movieRecord = await MovieModel.findByPk(id);
		if (movieRecord) {
			return new Movie(
				movieRecord.id,
				movieRecord.title,
				movieRecord.description,
				movieRecord.releaseDate
			);
		}
		return null;
	}

	async findAll() {
		const movieRecords = await MovieModel.findAll();
		return movieRecords.map(
			(movieRecord) =>
				new Movie(
					movieRecord.id,
					movieRecord.title,
					movieRecord.description,
					movieRecord.releaseDate
				)
		);
	}

	async update(movie) {
		await MovieModel.update(movie, { where: { id: movie.id } });
	}

	async delete(id) {
		await MovieModel.destroy({ where: { id } });
	}
}

module.exports = MovieRepositoryImpl;
