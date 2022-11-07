import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Section from "../../components/Section/Section";
import { useAddClientsMutation } from "../../lib/api/api";
import api from "../../lib/utils/axios";
import { convertDate } from "../../lib/utils/convertDate";
import sortListByDate from "../../lib/utils/sortListByDate";
import AddTR from "../AddTR/AddTR";
import Clients from "../Clients/Clients";
import DatePicker from "../DatePicker/DatePicker";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import NavBar from "../NavBar/NavBar";
import TimeReport from "../TimeReport/TimeReport";
import UpdateTR from "../UpdateTR/UpdateTR";
import UploadScreen from "../UploadScreen/UploadScreen";
import "./App.css";

function App() {
	const [datePicked, setDatePicked] = useState("");

	const { data: clientList, isLoading: clientLoading } = useQuery(
		["clients"],
		async () => {
			const response = await api.get("/clients");
			return response.data;
		}
	);

	const { data: timeReportList, isLoading: timereportLoading } = useQuery(
		["timereports", datePicked],
		async () => {
			const reponse = await api.get(
				`/timereports/${convertDate(datePicked)}`
			);
			return reponse.data;
		}
	);

	const addClients = useAddClientsMutation();

	const [upload, setUpload] = useState(false);
	const [addTRModal, setaddTRModal] = useState(false);
	const [updateTRModal, setUpdateTRModal] = useState(false);
	const [reportSelected, setReportSelect] = useState(1);

	useEffect(() => {
		setDatePicked(DateTime.now().toFormat("yyyy-MM-dd"));
	}, []);

	if (clientLoading && timereportLoading)
		return <LoadingScreen height="screen" />;

	if (upload === false) {
		return <UploadScreen setUpload={setUpload} />;
	}
	return (
		<div className="App">
			<NavBar timeReportList={timeReportList} clientList={clientList} />
			<div className="App__content">
				<Section height="25rem">
					<Clients
						clientList={clientList}
						setClientList={addClients}
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
						timeReportList={timeReportList}
						setaddTRModal={setaddTRModal}
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
						reportSelected={reportSelected}
						datePicked={datePicked}
					/>
				</Modal>
			)}
		</div>
	);
}

export default App;
