import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(API_URL);

export const createEmployee = (emp) => axios.post(API_URL, emp);

export const getEmployee = (empId) => axios.get(API_URL + '/' + empId);

export const updateEmployee = (empId, emp) => axios.put(API_URL + '/' + empId, emp);

export const deleteEmployee = (empId) => axios.delete(API_URL + '/' + empId);