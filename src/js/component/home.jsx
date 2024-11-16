import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Circle from "./circulo";

//create your first component
const Home = () => {
	return (
		<>
			<div className="palo"></div>
			<div className="container">
				<Circle className="circle"/>
				<Circle className="circle"/>
				<Circle className="circle"/>
			</div>
		</>
	);
};

export default Home;
