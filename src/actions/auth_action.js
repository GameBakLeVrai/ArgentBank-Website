import axios from "axios";

import { STATE } from "./types";

const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

export const login = (username, password) => async (dispatch) => {
	const data = {
		"email": username,
		"password": password
	}

	const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data, config);

	// Error Management
	if(response.status !== 200) return dispatch({ type: STATE.AUTH.LOGIN.FAILED, error: response.data });
	const token = response.data.body.token;

	localStorage.setItem("token", token);
	dispatch({ type: STATE.AUTH.LOGIN.SUCCESS });
};

export const logout = () => (dispatch) => {
	localStorage.removeItem("token");
	dispatch({ type: STATE.AUTH.LOGIN.LOGOUT });
};