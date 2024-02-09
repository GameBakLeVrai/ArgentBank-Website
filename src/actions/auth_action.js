import axios from "axios";

import { STATE } from "./types";
import { config } from ".";

export const login = (username, password) => async (dispatch) => {
	const data = {
		"email": username,
		"password": password
	}

	const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data, config);

	// Error Management
	if(response.status !== 200) return dispatch({ type: STATE.LOGIN.FAILED, error: response.data });
	const token = response.data.body.token;

	localStorage.setItem("token", token);
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	dispatch({ type: STATE.LOGIN.SUCCESS });
};

export const logout = () => async (dispatch) => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");

	dispatch({ type: STATE.LOGIN.LOGOUT });
	dispatch({ type: STATE.USER.RESET });

	delete axios.defaults.headers.common['Authorization'];
};