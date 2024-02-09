import axios from "axios";

import { STATE } from "./types";

export const getProfile = () => async (dispatch) => {
	const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/profile`);

	// Error Management
	if(response.status !== 200) return dispatch({ type: STATE.USER.FAILED, error: response.data.message });

	const infos = response.data.body;
	localStorage.setItem("user", JSON.stringify(infos));

	dispatch({ type: STATE.USER.SUCCESS, infos: infos });
};