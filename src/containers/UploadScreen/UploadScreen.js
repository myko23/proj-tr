import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./UploadScreen.css";

const UploadScreen = ({ setClientList, setTimeReportList, setUpload }) => {
	const [clients, setClients] = useState("");
	const [timereports, setTimeReports] = useState("");

	const handleChange = (e) => {
		const fileReader = new FileReader();
		fileReader.readAsText(e.target.files[0], "UTF-8");
		fileReader.onload = (e) => {
			const newFile = JSON.parse(e.target.result);
			setClients(newFile.clients);
			setTimeReports(newFile.timereports);
		};
	};

	const handleUpload = () => {
		setClientList(clients);
		setTimeReportList(timereports);
		setUpload(true);
	};
	const handleDownload = () => {
		const fileData = JSON.stringify({ hey: "Hey" });
		const blob = new Blob([fileData], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.download = "timereport.json";
		link.href = url;
		link.click();
	};

	return (
		<div className="UploadScreen">
			<div className="UploadScreen__box">
				<h1 className="UploadScreen__header">Welcome</h1>
				<h1 className="UploadScreen__sub-header">
					Please upload given files to get started
				</h1>
				<input type="file" accept=".json" onChange={handleChange} />
				<PrimaryButton onClick={handleUpload}>Upload</PrimaryButton>
			</div>
		</div>
	);
};

export default UploadScreen;
