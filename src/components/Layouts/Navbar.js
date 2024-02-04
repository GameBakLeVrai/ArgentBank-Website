import { Link } from "react-router-dom";

import argentBankLogo from "../../images/argentBankLogo.png";
import ProfileImg from "../../images/profileImg";

const Navbar = () => {
	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>

			<div>
				<Link className="main-nav-item" to="/login">
					<ProfileImg />
					Sign In
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;