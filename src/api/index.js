import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8000/' });

export const getAllProducts = async ({ queryKey }) => {
    // this { queryKey } auto supply by useQuery hook...
    const response = await api.get(queryKey[0]);
    return response.data;
}

export const getProductById = async ({ queryKey }) => {
    // this { queryKey } auto supply by useQuery hook...
    const response = await api.get(`${queryKey[0]}/${queryKey[1]}`);
    return response.data;
}