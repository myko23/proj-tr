import React from "react";
import "./PrimaryButton.css";
import cls from "classnames";

const PrimaryButton = ({
	children,
	width = "fit-content",
	className,
	onClick = () => {},
}) => {
	return (
		<button
			className={cls("PrimaryButton", className)}
			style={{ width }}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;
