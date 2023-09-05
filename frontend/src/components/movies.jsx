import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function Movie({ movie }) {
	return (
		<Card>
			<CardMedia component="img" image={movie.image} alt={movie.title} />
			<CardContent>
				<Typography variant="h5" component="h3">
					{movie.title}
				</Typography>
				<Typography variant="body1" color="textSecondary">
					{movie.description}
				</Typography>
				<Typography variant="body2">
					Duration: {movie.duration} minutes
				</Typography>
			</CardContent>
		</Card>
	);
}
