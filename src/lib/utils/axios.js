import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3001",
	headers: { "X-Custom-Header": "foobar" },
});

export default api;
