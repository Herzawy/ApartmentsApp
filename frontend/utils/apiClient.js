import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL_BACKEND = process.env.NEXT_PUBLIC_API_URL_BACKEND;

console.log('BASE_URL:', BASE_URL);

async function request(method, url, data = null, headers = {}) {
  try {
    const options = {
      method,
      url,
      headers,
      data,
    };

    const response = await axios(options);
    return response;
  } catch (error) {
    console.error(`Error with ${method} request to ${url}:`, error);
    throw error;
  }
}

export async function find(entity, id = null) {
  const url = id ? `${BASE_URL}/${entity}/${id}` : `${BASE_URL}/${entity}`;
  return await request('GET', url);
}

export async function create(entity, data) {
  const url = `${BASE_URL_BACKEND}/${entity}`;
  const response = await request('POST', `${BASE_URL_BACKEND}/${entity}`, data, {
    'Content-Type': 'application/json',
  });
  console.log('Create Response:', response);
  return response;
}

// we can add other methods like update, delete.
