import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(BASE_API_URL);