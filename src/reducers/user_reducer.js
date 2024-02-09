import { STATE } from "../actions/types";

const initialState = {
	user: (localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null,
	isLoaded: false
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case STATE.USER.SUCCESS:
			return {
				...state,
				user: action.infos,
				isLoaded: true,
			};

		case STATE.USER.RESET:
			return {
				user: null,
				isLoaded: false,
			};

		default:
			return state;
	}
};

export default userReducer;