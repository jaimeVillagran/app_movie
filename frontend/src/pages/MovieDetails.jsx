import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/movieService";

export default function MovieDetails() {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		getMovie(movieId).then(setMovie);
	}, [movieId]);

	// Render movie details...

	return (
		<>
			<h1>{movie.title}</h1>
			<p>{movie.description}</p>
		</>
	);
}
