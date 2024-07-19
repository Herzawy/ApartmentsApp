import axios from 'axios';

const BASE_URL = "http://backend:5000";
const BASE_URL_CREATE = "http://localhost:5000";

console.log('BASE_URL:', BASE_URL);
export async function find(entity, id = null) {
  try {
    const url = id ? `${BASE_URL}/${entity}/${id}` : `${BASE_URL}/${entity}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error finding ${entity}:`, error);
    throw error;
  }
}

export async function create(entity, data) {
    console.log("ASsasaasasa",data);
  try {
    const response = await axios.post(`${BASE_URL_CREATE}/${entity}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error(`Error creating ${entity}:`, error);
    throw error;
  }
}
// we can add other methods like update, delete.
