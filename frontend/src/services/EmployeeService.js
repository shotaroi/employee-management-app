import axios from "axios";

// const BASE_API_URL = "http://localhost:8080/api/employees";
const BASE_API_URL = 'http://Employee-management-app-env.eba-m2wv2fpi.eu-north-1.elasticbeanstalk.com/api/employees';

export const listEmployees = () => axios.get(BASE_API_URL);

export const createEmployee = (emp) => axios.post(BASE_API_URL, emp);

export const getEmployee = (empId) => axios.get(BASE_API_URL + '/' + empId);

export const updateEmployee = (empId, emp) => axios.put(BASE_API_URL + '/' + empId, emp);

export const deleteEmployee = (empId) => axios.delete(BASE_API_URL + '/' + empId);