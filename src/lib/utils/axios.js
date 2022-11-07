import axios from "axios";

const api = axios.create({
	baseURL: "https://time-report-backend.onrender.com",
	headers: { "X-Custom-Header": "foobar" },
});

export default api;
