//Angel Rausseo, RdeRausseo #Programmer15
import React, {useState} from "react";
import Footer from "./Footer";

//create your first component
const Home = () => {

	
	const [color, setColor] = useState("red");
	 
	//funcion que usamos para cambiar el valor de color y usarla en nuestro boton que cambia el focus del color
	function changeColor(color){
		switch(color){
			case "green":
				return "yellow";
			case "yellow":
				return "red";
			case "red":
				return "green";	
		}
	}

	return (
		<>
			{/*<div className="palo"></div>
			<div className="container">
				<Circle onClick={() => setColor("green")} focus={color==="green"? "focus":""} fondo="green"/>
				<Circle onClick={() => setColor("yellow")} focus={color==="yellow"? "focus":""} fondo="yellow"/>
				<Circle onClick={() => setColor("red")} focus={color === "red"? "focus":""} fondo="red"/>
				{color==="blueviolet" &&
					<Circle onClick={() => setColor("blueviolet")} focus={color === "blueviolet"? "focus":""} fondo="blueviolet"/>}

			</div>
	
				<button onClick={() => setColor(changeColor(color))} type="button" className="d-block my-2 mx-auto btn btn-outline-dark">change color</button>
				<button onClick={() => setColor("blueviolet")}  type="button" className="d-block mx-auto btn btn-outline-primary"> Add the Purple Color </button>*/}
			<Footer/>
		</>
	);
};

export default Home;
