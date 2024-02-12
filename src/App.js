import { useEffect } from "react";
import axios from "axios";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import store from "./store/store";

function App() {
	useEffect(() => {
		const token = localStorage.getItem('token');

		if(store.getState().auth.isAuthenticated && axios.defaults.headers.common['Authorization'] === undefined) {
			if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		}

		return () => {
			delete axios.defaults.headers.common['Authorization'];
		};
	}, []);

	return (
		<Router>
			<Navbar />

			<Routes>
				<Route index path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/profile" element={<Profile />} />

				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;