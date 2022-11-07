import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { useAddTimeReportsMutation } from "../../lib/api/api";
import { convertDate } from "../../lib/utils/convertDate";
import { convertTime } from "../../lib/utils/luxonDates";
import "./AddTR.css";

const AddTR = ({
	clientList = [],
	setaddTRModal = () => {},
	timeReportList,
	setTimeReportList,
	datePicked,
}) => {
	const addTimeReports = useAddTimeReportsMutation();

	const [client, setClient] = useState("");
	const [timeIn, setTimeIn] = useState("10:00");
	const [remarks, setRemarks] = useState("");

	useEffect(() => {
		setClient(clientList[0].client || "foo");
		setTimeIn(convertTime(DateTime.now()));
	}, [clientList]);

	const addTRButton = async () => {
		const newReport = {
			timeIn,
			timeOut: "NA",
			duration: "NA",
			client,
			remarks,
			date: convertDate(datePicked),
		};

		try {
			await addTimeReports.mutateAsync(newReport);
			setaddTRModal(false);
		} catch (err) {
			return console.log(err.message);
		}
	};

	return (
		<div className="AddTR">
			<SectionHeader>Add Report</SectionHeader>
			<div className="AddTR__input-set">
				<InputWithLabel
					className="AddTR__date"
					label="Time In"
					type="timepicker"
					value={timeIn}
					setValue={setTimeIn}
				/>
				<InputWithLabel
					className="AddTR__input"
					label="Clients"
					type="select"
					value={client}
					setValue={setClient}
					options={clientList.map((item) => item.client)}
				/>
				<InputWithLabel
					className="AddTR__input"
					label="Remarks"
					type="textarea"
					value={remarks}
					setValue={setRemarks}
					row="4"
				/>
			</div>
			<div className="AddTR__button-set">
				<PrimaryButton
					onClick={addTRButton}
					className="AddTR__button"
					width="100%"
				>
					Add Report
				</PrimaryButton>
				<PrimaryButton
					onClick={() => setaddTRModal(false)}
					className="AddTR__button"
					width="100%"
				>
					Back
				</PrimaryButton>
			</div>
		</div>
	);
};

export default AddTR;
