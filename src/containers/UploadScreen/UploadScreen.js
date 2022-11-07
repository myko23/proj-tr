import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./UploadScreen.css";

const UploadScreen = ({ setUpload }) => {
	return (
		<div className="UploadScreen">
			<div className="UploadScreen__box">
				<div className="UploadScreen__header-container">
					<h1 className="UploadScreen__header">Welcome</h1>
					<h2 className="UploadScreen__sub-header">
						Please upload given files to get started
					</h2>
				</div>

				<PrimaryButton
					className="UploadScreen__upload-button"
					onClick={() => {
						setUpload(true);
					}}
				>
					Run Realtime
				</PrimaryButton>
			</div>
		</div>
	);
};

export default UploadScreen;
