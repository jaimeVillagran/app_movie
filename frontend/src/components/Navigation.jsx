import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Button component={Link} to="/" color="inherit">
					Home
				</Button>

				<Button component={Link} to="/login" color="inherit">
					Login
				</Button>

				<Button component={Link} to="/movies" color="inherit">
					Movies
				</Button>
			</Toolbar>
		</AppBar>
	);
}
