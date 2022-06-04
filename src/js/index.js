//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

const SecondCounter = (props) => {
	console.log(props);
	return (
		<h1 className="Title m-2 text-center">
			My First Counter
			<div className="BigCounter">
				<div className="digit m-2">{props.semana}</div>
				<div className="digit m-2">{props.dia}</div>
				<div className="digit m-2">{props.horas}</div>
				<div className="digit m-2">{props.minutos}</div>
				<div className="digit m-2">{props.segundos}</div>
			</div>
		</h1>
	);
};

// const Seconds = () => {
//
//return counter;
// };
let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

setInterval(function () {
	counter++;
	if (counter === 9) {
		counter = 0;
		counter2++;
		if (counter2 === 6) {
			counter2 = 0;
			counter3++;
			if (counter3 === 24) {
				counter3 = 0;
				counter4++;
				if (counter4 === 7) {
					counter4 = 0;
					counter5++;
				}
			}
		}
	}

	//console.log(counter);
	ReactDOM.render(
		<SecondCounter
			segundos={counter}
			minutos={counter2}
			horas={counter3}
			dia={counter4}
			semana={counter5}
		/>,
		document.querySelector("#app")
	);
}, 1000);
