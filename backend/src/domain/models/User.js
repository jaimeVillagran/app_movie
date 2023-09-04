class User {
	constructor(id, email, password, name) {
		this.id = id;
		this.email = email;
		this.password = password; // Recuerda que en un escenario real, nunca almacenarías la contraseña directamente.
		this.name = name;
	}

	// Aquí puedes agregar métodos relacionados con la lógica de negocio.
	// Por ejemplo, un método para cambiar el email del usuario:
	changeEmail(newEmail) {
		if (typeof newEmail === "string" && newEmail.includes("@")) {
			this.email = newEmail;
		} else {
			throw new Error("Email inválido");
		}
	}

	// Otros métodos relacionados con la lógica de negocio pueden ser agregados aquí.
}

module.exports = User;
