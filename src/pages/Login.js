import { useState } from "react";

import ProfileImg from "../images/profileImg";

const Login = () => {
	const [formData, setFormData] = useState({
        username: "",
        password: "",
        remember: false
    });

	const handleChangeForm = (e, type) => setFormData({ ...formData, [type]: (type !== "remember") ? e.target.value : e.target.checked });

	const onSubmit = (e) => {
		e.preventDefault();

		if(formData.username !== "" && formData.password !== "") {
			console.log(formData);
		}
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in">
				<ProfileImg />
				<h1>Sign In</h1>

				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" onChange={(e) => handleChangeForm(e, "username")} />
					</div>

					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={(e) => handleChangeForm(e, "password")} />
					</div>

					<div className="input-remember">
						<input type="checkbox" id="remember-me" onChange={(e) => handleChangeForm(e, "remember")} />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					
					<button className="sign-in-button" onClick={onSubmit}>Sign In</button>
				</form>
			</section>
		</main>
	);
};

export default Login;