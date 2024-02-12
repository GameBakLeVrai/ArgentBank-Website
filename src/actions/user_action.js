import axios from "axios";

import { STATE } from "./types";
import { config } from ".";

export const getProfile = () => async (dispatch) => {
	const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/profile`);

	// Error Management
	if(response.status !== 200) return dispatch({ type: STATE.USER.FAILED, error: response.data.message });

	const infos = response.data.body;
	localStorage.setItem("user", JSON.stringify(infos));

	dispatch({ type: STATE.USER.SUCCESS, infos: infos });
};

export const updateProfile = ({ firstName, lastName }) => async (dispatch) => {
	const data = {
		firstName: firstName,
		lastName: lastName
	}

	const response = await axios.put(`${process.env.REACT_APP_API_URL}/user/profile`, data, config);

	// Error Management
	if(response.status !== 200) return dispatch({ type: STATE.USER.FAILED, error: response.data.message });
	localStorage.removeItem("user");

	const newInfos = await axios.post(`${process.env.REACT_APP_API_URL}/user/profile`);

	const infos = newInfos.data.body;
	localStorage.setItem("user", JSON.stringify(infos));

	dispatch({ type: STATE.USER.MODIFIED, infos: infos });
};