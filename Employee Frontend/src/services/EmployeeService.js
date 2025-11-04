import axios from "axios";

const REST_API_BASE_URL="http://localhost:9999/empall";
const REST_API_SINGLE_URL="http://localhost:9999";
const REST_API_POST_URL="http://localhost:9999/empcreate";
const REST_API_UPDATE_URL="http://localhost:9999/empupdate";
const REST_API_DELETE_URL="http://localhost:9999/empdelete";

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const getAnEmployee = (employeeId) => axios.get(REST_API_SINGLE_URL + '/' + employeeId);

export const createEmployee = (employee) => axios.post(REST_API_POST_URL,employee);

export const updateEmployee = (employeeId,employee) => axios.put(REST_API_UPDATE_URL + '/' + employeeId,employee);

export const deleteAnEmployee = (employeeId) => axios.delete(REST_API_DELETE_URL + '/' + employeeId);