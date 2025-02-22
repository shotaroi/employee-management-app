import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(API_URL);

export const createEmployee = (emp) => axios.post(API_URL, emp);