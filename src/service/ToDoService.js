import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/v1";

export const addNewTask = (task, completed) => {
    return axios.post(`${REST_API_BASE_URL}/addTask`, {
      task, completed
    });
  };
  