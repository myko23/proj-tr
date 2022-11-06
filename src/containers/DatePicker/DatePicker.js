import React from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./DatePicker.css";

const DatePicker = ({ datePicked, setDatePicked }) => {
	return (
		<div className="DatePicker">
			<SectionHeader>Date</SectionHeader>
			<InputWithLabel
				value={datePicked}
				setValue={setDatePicked}
				className="DatePicker__date"
				label="DAY / MONTH / YEAR"
				type="date"
				width="30rem"
			/>
		</div>
	);
};

export default DatePicker;
