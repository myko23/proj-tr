import _ from "lodash";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Table from "../../components/Table/Table";
import useTableSettings from "../../lib/utils/hooks/useTableSettings";
import "./TimeReport.css";

const TimeReport = ({
	timeReportList,
	setTimeReportList,
	setaddTRModal,
	setUpdateTRModal,
	reportSelected,
	setReportSelect,
}) => {
	const data = useTableSettings(timeReportList, [
		{ timeIn: "Time IN", duration: "Duration" },
	]);

	const onRemoveReport = () => {
		const newReportList = _.filter(
			timeReportList,
			(item) => item.id !== reportSelected
		);
		setTimeReportList(newReportList);
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
				<PrimaryButton
					className="TimeReport__button"
					onClick={() => {
						setTimeReportList([]);
					}}
				>
					Remove All
				</PrimaryButton>
			</div>
			<div className="TimeReport__table-container">
				<Table
					onRowDoubleClick={() => setUpdateTRModal(true)}
					selected={reportSelected}
					onRowClick={setReportSelect}
					data={_.orderBy(timeReportList, ["timeIn"], ["asc"])}
					headers={[
						"Time In",
						"Time Out",
						"Duration",
						"Client",
						"Remarks",
					]}
				/>
			</div>
		</div>
	);
};

export default TimeReport;
