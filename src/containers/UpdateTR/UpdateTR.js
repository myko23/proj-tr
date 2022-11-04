import _ from "lodash";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { diffTime } from "../../lib/utils/diffTime";
import { convertTime } from "../../lib/utils/luxonDates";
import "./UpdateTR.css";

const UpdateTR = ({
	clientList = [],
	setUpdateTRModal = () => {},
	timeReportList,
	reportSelected,
}) => {
	const [client, setClient] = useState("");
	const [timeIn, setTimeIn] = useState("10:00");
	const [timeOut, setTimeOut] = useState("10:00");
	const [duration, setDuration] = useState("10:00");
	const [remarks, setRemarks] = useState("");

	useEffect(() => {
		const clientSet = _.find(timeReportList, { id: reportSelected });
		setClient(clientSet.client);
		setTimeIn(clientSet.timeIn);
		setTimeOut(
			clientSet.timeOut !== "NA"
				? clientSet.timeOut
				: convertTime(DateTime.now())
		);
		setDuration(clientSet.duration !== "NA" ? clientSet.duration : "NA");
		setRemarks(clientSet.remarks);
	}, [timeReportList, reportSelected]);

	useEffect(() => {
		const dur = diffTime(timeIn, timeOut);
		setDuration(dur);
	}, [timeIn, timeOut]);

	const onTimeOut = () => {
		const index = _.findIndex(
			timeReportList,
			(item) => item.id === reportSelected
		);
		timeReportList[index].timeIn = timeIn;
		timeReportList[index].timeOut = timeOut;
		timeReportList[index].duration = duration;
		timeReportList[index].client = client;
		timeReportList[index].remarks = remarks;

		setUpdateTRModal(false);
	};
	const onTimeOutAuto = () => {
		const index = _.findIndex(
			timeReportList,
			(item) => item.id === reportSelected
		);
		timeReportList[index].timeIn = timeIn;
		timeReportList[index].timeOut = convertTime(DateTime.now());
		timeReportList[index].duration = duration;
		timeReportList[index].client = client;
		timeReportList[index].remarks = remarks;

		setUpdateTRModal(false);
	};

	return (
		<div className="UpdateTR">
			<SectionHeader>Update TR</SectionHeader>
			<div className="UpdateTR__input-set">
				<InputWithLabel
					className="UpdateTR__date"
					label="Time In"
					type="timepicker"
					value={timeIn}
					setValue={setTimeIn}
				/>
				<InputWithLabel
					className="UpdateTR__date"
					label="Time Out"
					type="timepicker"
					value={timeOut}
					setValue={setTimeOut}
				/>
				<InputWithLabel
					className="UpdateTR__input"
					label="Duration"
					value={duration}
					setValue={setDuration}
					disabled={true}
				/>
				<InputWithLabel
					className="UpdateTR__input"
					label="Clients"
					type="select"
					value={client}
					setValue={setClient}
					options={clientList.map((item) => item.client)}
				/>
				<InputWithLabel
					className="UpdateTR__input"
					label="Remarks"
					type="textarea"
					value={remarks}
					setValue={setRemarks}
					row="4"
				/>
			</div>
			<div className="UpdateTR__button-set">
				<PrimaryButton
					onClick={onTimeOut}
					className="UpdateTR__button"
					width="100%"
				>
					Time Out
				</PrimaryButton>
				<PrimaryButton
					onClick={onTimeOutAuto}
					className="UpdateTR__button"
					width="100%"
				>
					Auto
				</PrimaryButton>
				<PrimaryButton
					onClick={() => {
						setUpdateTRModal(false);
					}}
					className="UpdateTR__button"
					width="100%"
				>
					Back
				</PrimaryButton>
			</div>
		</div>
	);
};

export default UpdateTR;
