import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";




//create your first component
const Home = () => {
	return (
		<div className="text-center space-between">
			< Navbar />
			< Jumbotron />
			<div className="card-container d-flex gap: 16px justify-content-center">
				< Card />
				< Card />
				< Card />
				< Card />
			</div>
			< Footer />
		</div>
	);
};

export default Home;
