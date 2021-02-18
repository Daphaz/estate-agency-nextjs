import axios from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_API_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default api;
