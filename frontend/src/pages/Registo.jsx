import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	const { register } = useAuth();

	function handleSubmit(e) {
		e.preventDefault();
		register(form);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="name"
				value={form.name}
				onChange={(e) => setForm({ ...form, name: e.target.value })}
			/>

			<input
				name="email"
				value={form.email}
				onChange={(e) => setForm({ ...form, email: e.target.value })}
			/>

			<input
				name="password"
				value={form.password}
				onChange={(e) => setForm({ ...form, password: e.target.value })}
			/>

			<button type="submit">Sign up</button>
		</form>
	);
}
