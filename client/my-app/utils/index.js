// apiClient.js
'use server'
import axios from 'axios';

const BASE_URL = process.env.BACKEND_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers like authorization token here
  },
});

export const getInfo = async () => {
    try {
      const response = await _get(`${process.env.BACKEND_URL}/get-data`);
      console.log("Data is", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
      throw error;  
    }
  };

// Define common API methods
const _get = (url, config = {}) => {
   
  return apiClient.get(url, config);
};

const _delete = (url, config = {}) => {
  return apiClient.delete(url, config);
};

const _put = (url, data = {}, config = {}) => {
  return apiClient.put(url, data, config);
};

const _post = (url, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
};

// Export API methods
export { _get, _delete, _put, _post }; 