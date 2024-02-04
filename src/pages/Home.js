import FeatureItem from "../components/featureItem";

import iconChat from "../images/icon-chat.png";
import iconMoney from "../images/icon-money.png";
import iconSecurity from "../images/icon-security.png";

const Home = () => {
	return (
		<main className="home">
			<div className="hero">
				<section className="hero-content">
					<h2 className="sr-only">Promoted Content</h2>
					
					{["No fees", "No minimum deposit", "High interest rates"].map((el) => <p key={el} className="subtitle">{el}.</p>)}
					<p className="text">Open a savings account with Argent Bank today!</p>
				</section>
			</div>
			
			<section className="features">
				<h2 className="sr-only">Features</h2>

				<FeatureItem
					img={iconChat}
					altImg="Chat Icon"
					title={"You are our #1 priority"}
					text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
				/>

				<FeatureItem
					img={iconMoney}
					altImg="Money Icon"
					title={"More savings means higher rates"}
					text={"The more you save with us, the higher your interest rate will be!"}
				/>

				<FeatureItem
					img={iconSecurity}
					altImg="Security Icon"
					title={"Security you can trust"}
					text={"We use top of the line encryption to make sure your data and money is always safe."}
				/>
			</section>
		</main>
	);
};

export default Home;
