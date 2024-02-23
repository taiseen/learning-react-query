import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8000/' });

export const getAllProducts = async ({ queryKey }) => {
    // this { queryKey } auto supply by useQuery hook...
    const response = await api.get(queryKey[0]);
    return response.data;
}

export const getProductById = async ({ queryKey }) => {
    const response = await api.get(`${queryKey[0]}/${queryKey[1]}`);
    return response.data;
}

export const addNewProduct = async (item) => {
    const response = await api.post('products', item);
    return response.data;
}

export const editProduct = async (item) => {
    const response = await api.patch(`products/${item.id}`, item);
    return response.data;
}

export const productDeleteById = async (id) => {
    await api.delete(`products/${id}`);
}