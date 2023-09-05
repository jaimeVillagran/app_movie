import { useState, useEffect } from "react";
import { getMovies } from "../services/movieService";
import Movie from "../components/Movie";

export default function Movies() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovies().then(setMovies);
	}, []);

	return (
		<div>
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</div>
	);
}
