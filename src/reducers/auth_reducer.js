import { STATE } from "../actions/types";

const initialState = {
	isAuthenticated: (localStorage.getItem("token")) ? true : false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case STATE.AUTH.LOGIN.SUCCESS:
			return {
				...state,
				isAuthenticated: true,
			};

		case STATE.AUTH.LOGIN.FAILED:
			return {
				...state,
				isAuthenticated: false,
				error: action.payload.message,
			};

		case STATE.AUTH.LOGIN.LOGOUT:
			return {
				...state,
				isAuthenticated: false
			};

		default:
			return state;
	}
};

export default authReducer;