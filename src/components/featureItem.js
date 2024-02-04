const FeatureItem = ({ img, altImg, title, text }) => {
	return (
		<div className="feature-item">
			<img src={img} alt={altImg} className="feature-icon" />

			<h3 className="feature-item-title">{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default FeatureItem;