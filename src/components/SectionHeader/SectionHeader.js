import React from "react";
import "./SectionHeader.css";
import cls from "classnames";

const SectionHeader = ({ children, className }) => {
	return <h1 className={cls("SectionHeader", className)}>{children}</h1>;
};

export default SectionHeader;
