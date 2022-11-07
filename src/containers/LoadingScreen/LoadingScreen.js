import React from "react";
import Loader from "../../components/Loader/Loader";
import "./LoadingScreen.css";

const LoadingScreen = ({ height = "fit", background = "white" }) => {
	const renderHeight = () => {
		if (height === "fit") return "100%";
		else return "100vh";
	};
	return (
		<div
			className="LoadingScreen"
			style={{ height: renderHeight(), backgroundColor: background }}
		>
			<Loader />
		</div>
	);
};

export default LoadingScreen;
