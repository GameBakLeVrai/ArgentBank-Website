import store from "../store/store";

import { getProfile } from "./user_action";

export const config = {
	headers: {
		"Content-Type": "application/json"
	},
};

const fetchProfile = () => {
    if (store.getState().auth.isAuthenticated === true) {
        if(store.getState().user.isLoaded !== true) store.dispatch(getProfile());
    }
}

store.subscribe(() => {
    fetchProfile();
});