const downloadData = (data) => {
	const fileData = JSON.stringify(data);
	const blob = new Blob([fileData], { type: "text/plain" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.download = "timereport.json";
	link.href = url;
	link.click();
};
export default downloadData;
