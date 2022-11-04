import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Section from "../../components/Section/Section";
import { clientData } from "../../Data/clientsData";
import { timeReportData } from "../../Data/timeReportData";
import AddTR from "../AddTR/AddTR";
import Clients from "../Clients/Clients";
import NavBar from "../NavBar/NavBar";
import TimeReport from "../TimeReport/TimeReport";
import UpdateTR from "../UpdateTR/UpdateTR";
import "./App.css";

function App() {
	const [timeReportList, setTimeReportList] = useState([]);
	const [clientList, setClientList] = useState([]);

	const [addTRModal, setaddTRModal] = useState(false);
	const [updateTRModal, setUpdateTRModal] = useState(false);
	const [reportSelected, setReportSelect] = useState(1);

	useEffect(() => {
		setTimeReportList(timeReportData);
		setClientList(clientData);
	}, []);

	return (
		<div className="App">
			<NavBar />
			<div className="App__content">
				<Section height="25rem">
					<Clients
						clientList={clientList}
						setClientList={setClientList}
					/>
				</Section>
				<Section height="fit-content">
					<TimeReport
						timeReportList={timeReportList}
						setTimeReportList={setTimeReportList}
						setaddTRModal={setaddTRModal}
						setUpdateTRModal={setUpdateTRModal}
						reportSelected={reportSelected}
						setReportSelect={setReportSelect}
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
					/>
				</Modal>
			)}
		</div>
	);
}

export default App;
