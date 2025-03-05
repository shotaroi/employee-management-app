import axios from 'axios';

// const BASE_API_URL = 'http://localhost:8080/api/departments';
const BASE_API_URL = 'http://Employee-management-app-env.eba-m2wv2fpi.eu-north-1.elasticbeanstalk.com/api/departments';

export const getAllDepartments = () => axios.get(BASE_API_URL);

export const createDepartment = (department) => axios.post(BASE_API_URL, department);

export const getDepartment = (departmentId) => axios.get(BASE_API_URL + '/' + departmentId);

export const updateDepartment = (departmentId, department) => axios.put(BASE_API_URL + "/" + departmentId, department);

export const deleteDepartment = (departmentId) => axios.delete(BASE_API_URL + '/' + departmentId);