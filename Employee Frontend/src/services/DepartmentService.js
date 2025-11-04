import axios from "axios";

const REST_API_BASE_URL="http://localhost:9999/deptall";
const REST_API_SINGLE_URL="http://localhost:9999/dept";
const REST_API_POST_URL="http://localhost:9999/deptcreate";
const REST_API_UPDATE_URL="http://localhost:9999/deptupdate";
const REST_API_DELETE_URL="http://localhost:9999/deptdelete";



export const listDepartments = () => axios.get(REST_API_BASE_URL);

export const getDepartment = (departmentId) => axios.get(REST_API_SINGLE_URL + '/' + departmentId);

export const createDepartment = (department) => axios.post(REST_API_POST_URL,department);

export const updateDepartment = (departmentId,department) => axios.put(REST_API_UPDATE_URL + '/' + departmentId,department);

export const deleteDepartment = (departmentId) => axios.delete(REST_API_DELETE_URL + '/' + departmentId);