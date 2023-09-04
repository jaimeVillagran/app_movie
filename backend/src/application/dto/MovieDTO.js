class MovieDTO {
	constructor({
		id,
		title,
		description,
		releaseDate,
		duration,
		genre,
		director,
		mainActors,
		rating,
		posterUrl,
	}) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.releaseDate = releaseDate;
		this.duration = duration;
		this.genre = genre;
		this.director = director;
		this.mainActors = mainActors;
		this.rating = rating;
		this.posterUrl = posterUrl;
	}
}

module.exports = MovieDTO;
