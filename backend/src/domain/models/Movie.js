class Movie {
	constructor(id, title, description, releaseYear) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.releaseYear = releaseYear;
	}

	// Aquí puedes agregar métodos relacionados con la lógica de negocio.
	// Por ejemplo, un método para cambiar el título de la película:
	changeTitle(newTitle) {
		if (typeof newTitle === "string" && newTitle.length > 0) {
			this.title = newTitle;
		} else {
			throw new Error("Título inválido");
		}
	}

	// Otros métodos relacionados con la lógica de negocio pueden ser agregados aquí.
}

module.exports = Movie;
