import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { login } from "../actions/auth_action";

import ProfileImg from "../images/profileImg";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isAuthenticated } = useSelector((state) => state.auth);

	const [formData, setFormData] = useState({
		username: "",
		password: "",
		remember: false,
	});

	useEffect(() => {
		if(isAuthenticated === true) navigate("/profile");
	}, [navigate, isAuthenticated]);

	const handleChangeForm = (e, type) => setFormData({ ...formData, [type]: (type !== "remember") ? e.target.value : e.target.checked });

	const onSubmit = (e) => {
		e.preventDefault();
		if(formData.username !== "" && formData.password !== "") dispatch(login(formData.username, formData.password));
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