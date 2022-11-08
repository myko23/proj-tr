import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import downloadData from "../../lib/utils/downloadData";
import "./NavBar.css";

const NavBar = ({ timeReportList, clientList }) => {
	const converDatatoJSON = () => {
		const newData = { clients: clientList, timereports: timeReportList };
		return newData;
	};
	const handleSave = () => {
		downloadData(converDatatoJSON());
	};
	return (
		<div className="NavBar">
			<h1 className="NavBar__header">Time Report</h1>
		</div>
	);
};

export default NavBar;
