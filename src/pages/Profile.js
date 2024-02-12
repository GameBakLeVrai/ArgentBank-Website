import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TransactionCard from '../components/transactionCard';
import { updateProfile } from '../actions/user_action';

const Profile = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	
	const [isActive, setActive] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: ""
	});

	const handleChangeForm = (e, type) => setFormData({ ...formData, [type]: e.target.value });

	const onSubmit = () => {
		if(formData.firstName !== "" && formData.lastName !== "") {
			dispatch(updateProfile(formData));
			setActive(false);
		}
	}

	if(!user) return <div>Loading ...</div>;

	return (
		<main className="main bg-dark profile">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{(isActive ? (
						<div className="profile-edit">
							<div>
								<input type="text" placeholder={user.firstName} onChange={(e) => handleChangeForm(e, "firstName")} />
								<button className="edit-button" onClick={onSubmit}>Save</button>
							</div>

							<div>
								<input type="text" placeholder={user.lastName} onChange={(e) => handleChangeForm(e, "lastName")} />
								<button className="edit-button" onClick={() => {
									setFormData({
										firstName: "",
										lastName: ""
									});
									setActive(false);
								}}>Cancel</button>
							</div>
						</div>
					) : `${user.firstName} ${user.lastName}`)}
				</h1>
				
				{!isActive && <button className="edit-button" onClick={() => setActive(true)}>Edit Name</button>}
			</div>

			<h2 className="sr-only">Accounts</h2>

			<TransactionCard title={"Argent Bank Checking (x8349)"} amount={"2,082.79"} description={"Available Balance"} />
			<TransactionCard title={"Argent Bank Checking (x6712)"} amount={"10,928.42"} description={"Available Balance"} />
			<TransactionCard title={"Argent Bank Checking (x8349)"} amount={"184.30"} description={"Current Balance"} />
		</main>
	);
};

export default Profile;
