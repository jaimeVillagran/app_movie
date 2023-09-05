function Login() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<TextField label="Email" />
			</Grid>
			<Grid item xs={12}>
				<TextField label="Contraseña" type="password" />
			</Grid>
			<Grid item xs={12}>
				<Button variant="contained">Ingresar</Button>
			</Grid>
			<Grid item xs={12}>
				<Button variant="text" component={Link} to="/registro">
					¿No tienes cuenta? Registrate
				</Button>
			</Grid>
		</Grid>
	);
}
