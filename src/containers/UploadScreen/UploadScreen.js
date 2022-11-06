import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./UploadScreen.css";

const UploadScreen = ({ setClientList, setTimeReportList, setUpload }) => {
	const [clients, setClients] = useState("");
	const [timereports, setTimeReports] = useState("");
	const [uploadAllowed, setUploadAllowed] = useState(false);

	const handleChange = (e) => {
		const fileReader = new FileReader();
		fileReader.readAsText(e.target.files[0], "UTF-8");
		fileReader.onload = (e) => {
			const newFile = JSON.parse(e.target.result);
			setClients(newFile.clients);
			setTimeReports(newFile.timereports);
		};
		setUploadAllowed(true);
	};

	const handleUpload = () => {
		if (uploadAllowed === false) return;

		setClientList(clients);
		setTimeReportList(timereports);
		setUpload(true);
	};

	return (
		<div className="UploadScreen">
			<div className="UploadScreen__box">
				<div className="UploadScreen__header-container">
					<h1 className="UploadScreen__header">Welcome</h1>
					<h2 className="UploadScreen__sub-header">
						Please upload given files to get started
					</h2>
				</div>
				<input
					className="UploadScreen__upload-input"
					type="file"
					accept=".json"
					onChange={handleChange}
				/>
				<PrimaryButton
					className="UploadScreen__upload-button"
					onClick={handleUpload}
				>
					Upload
				</PrimaryButton>
			</div>
		</div>
	);
};

export default UploadScreen;
