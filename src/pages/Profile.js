import { useDispatch, useSelector } from 'react-redux';
import TransactionCard from '../components/transactionCard';

const Profile = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.user);
	if(!user) return <div>Loading ...</div>;

	return (
		<main className="main bg-dark profile">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{`${user.firstName} ${user.lastName}`}
				</h1>
				
				<button className="edit-button">Edit Name</button>
			</div>

			<h2 className="sr-only">Accounts</h2>

			<TransactionCard title={"Argent Bank Checking (x8349)"} amount={"2,082.79"} description={"Available Balance"} />
			<TransactionCard title={"Argent Bank Checking (x6712)"} amount={"10,928.42"} description={"Available Balance"} />
			<TransactionCard title={"Argent Bank Checking (x8349)"} amount={"184.30"} description={"Current Balance"} />
		</main>
	);
};

export default Profile;
