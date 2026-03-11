import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
return (
	<div>
	<h1>Main</h1>
		<p><Link to="/">Main</Link></p>
		<p><Link to="/form">Take quiz</Link></p>
	</div>
);
};

export default Main;
