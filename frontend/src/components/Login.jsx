import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes realizar la lógica de autenticación
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					fullWidth
					margin="normal"
					variant="outlined"
				/>
				<TextField
					label="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					fullWidth
					margin="normal"
					variant="outlined"
				/>
				<Button type="submit" variant="contained" color="primary">
					Login
				</Button>
			</form>
		</div>
	);
};

export default Login;
