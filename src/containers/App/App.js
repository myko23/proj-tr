import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Section from "../../components/Section/Section";
import { clientData } from "../../Data/clientsData";
import { timeReportData } from "../../Data/timeReportData";
import { convertDate } from "../../lib/utils/convertDate";
import sortListByDate from "../../lib/utils/sortListByDate";
import AddTR from "../AddTR/AddTR";
import Clients from "../Clients/Clients";
import DatePicker from "../DatePicker/DatePicker";
import NavBar from "../NavBar/NavBar";
import TimeReport from "../TimeReport/TimeReport";
import UpdateTR from "../UpdateTR/UpdateTR";
import UploadScreen from "../UploadScreen/UploadScreen";
import "./App.css";

function App() {
	const [upload, setUpload] = useState(false);
	const [timeReportList, setTimeReportList] = useState([]);
	const [clientList, setClientList] = useState([]);

	const [addTRModal, setaddTRModal] = useState(false);
	const [updateTRModal, setUpdateTRModal] = useState(false);
	const [reportSelected, setReportSelect] = useState(1);

	const [datePicked, setDatePicked] = useState("");

	useEffect(() => {
		// setTimeReportList(timeReportData);
		// setClientList(clientData);
		setDatePicked(DateTime.now().toFormat("yyyy-MM-dd"));
	}, []);

	if (upload === false) {
		return (
			<UploadScreen
				setTimeReportList={setTimeReportList}
				setClientList={setClientList}
				setUpload={setUpload}
			/>
		);
	}

	return (
		<div className="App">
			<NavBar timeReportList={timeReportList} clientList={clientList} />
			<div className="App__content">
				<Section height="25rem">
					<Clients
						clientList={clientList}
						setClientList={setClientList}
					/>
				</Section>
				<Section height="fit-content">
					<DatePicker
						datePicked={datePicked}
						setDatePicked={setDatePicked}
					/>
				</Section>
				<Section height="fit-content">
					<TimeReport
						allTimeReportList={timeReportList}
						timeReportList={sortListByDate(
							timeReportList,
							datePicked
						)}
						setTimeReportList={setTimeReportList}
						setaddTRModal={setaddTRModal}
						setUpdateTRModal={setUpdateTRModal}
						reportSelected={reportSelected}
						setReportSelect={setReportSelect}
						datePicked={datePicked}
					/>
				</Section>
			</div>
			{addTRModal && (
				<Modal>
					<AddTR
						clientList={clientList}
						setaddTRModal={setaddTRModal}
						timeReportList={timeReportList}
						setTimeReportList={setTimeReportList}
						datePicked={datePicked}
					/>
				</Modal>
			)}
			{updateTRModal && (
				<Modal>
					<UpdateTR
						clientList={clientList}
						setUpdateTRModal={setUpdateTRModal}
						timeReportList={timeReportList}
						setTimeReportList={setTimeReportList}
						reportSelected={reportSelected}
						datePicked={datePicked}
					/>
				</Modal>
			)}
		</div>
	);
}

export default App;
