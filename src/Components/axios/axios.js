import axios from "axios";
const instance = axios.create({
	baseURL: "https://amazonproject-bm0b.onrender.com/",
});
export default instance;
