import React from "react";
import "./Section.css";

const Section = ({ children, height = "40rem" }) => {
	return (
		<div className="Section" style={{ height }}>
			{children}
		</div>
	);
};

export default Section;
