import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { logout } from "../../actions/auth_action";

import argentBankLogo from "../../images/argentBankLogo.png";

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isAuthenticated } = useSelector((state) => state.auth);
	const { user } = useSelector((state) => state.user);

	const handleClick = (e) => {
		e.preventDefault();

		if (isAuthenticated) {
			dispatch(logout());
			navigate("/");
		}

		navigate("/login");
	}

	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>

			<div>
				{(isAuthenticated) && (
					(user !== null) && (
						<Link className="main-nav-item" to={"/profile"}>
							<i className="fa fa-user-circle sign-in-icon"></i>
							{user.firstName}
						</Link>
					)
				)}

				<Link className="main-nav-item" to={(isAuthenticated) ? "/logout" : "/login"} onClick={handleClick}>
					{(isAuthenticated) ? 
					(<>
						<i className="fa fa-sign-out"></i>
						Sign Out
					</>) : (
						<>
							<i className="fa fa-user-circle sign-in-icon"></i>
							Sign In
						</>
					)}
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;