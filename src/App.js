import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Login from "./pages/Login";

function App() {
	return (
		<Router>
			<Navbar />

			<Routes>
				<Route index path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />

				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;