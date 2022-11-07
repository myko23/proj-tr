import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Table from "../../components/Table/Table";
import { useDeleteTimeReportsMutation } from "../../lib/api/api";
import useTableSettings from "../../lib/hooks/useTableSettings";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import "./TimeReport.css";

const TimeReport = ({
	timeReportList,
	setTimeReportList,
	setaddTRModal,
	setUpdateTRModal,
	reportSelected,
	setReportSelect,
	datePicked,
	allTimeReportList,
}) => {
	const deleteReport = useDeleteTimeReportsMutation();

	const timeListConfigs = useTableSettings(
		timeReportList,
		{
			timeIn: "Time IN",
			timeOut: "Time Out",
			duration: "Duration",
			client: "Clients",
			remarks: "Remarks",
		},
		{}
	);

	const onRemoveReport = async () => {
		try {
			await deleteReport.mutateAsync(reportSelected);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className="TimeReport">
			<div className="TimeReport__header-section">
				<SectionHeader className="TimeReport__header">
					Time Report
				</SectionHeader>
				<PrimaryButton
					className="TimeReport__button"
					onClick={() => setaddTRModal(true)}
				>
					Add Report
				</PrimaryButton>
				<PrimaryButton
					className="TimeReport__button"
					onClick={onRemoveReport}
				>
					Remove
				</PrimaryButton>
				{/* <PrimaryButton
					className="TimeReport__button"
					onClick={() => {
						const newList = _.filter(
							allTimeReportList,
							(item) => item.date !== convertDate(datePicked)
						);
						setTimeReportList(newList);
					}}
				>
					Remove All
				</PrimaryButton> */}
			</div>
			<div className="TimeReport__table-container">
				{deleteReport.isLoading ? (
					<LoadingScreen />
				) : (
					<Table
						onRowDoubleClick={() => setUpdateTRModal(true)}
						selected={reportSelected}
						onRowClick={setReportSelect}
						data={timeListConfigs.data}
						headers={timeListConfigs.headers}
					/>
				)}
			</div>
		</div>
	);
};

export default TimeReport;
