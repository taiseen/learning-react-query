import axios from 'axios';

const api = axios.create({ baseURL: 'https://dummyjson.com/' });

export const productApiEndpoint = 'products';


// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐
// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐
// only responsible for [[[api calling]]]...

export const getAllProducts = async ({ queryKey }) => {
    // this { queryKey } auto supply by useQuery hook...
    const response = await api.get(queryKey[0]);
    return response.data;
}


export const getProductByIs = async ({ queryKey }) => {
    const response = await api.get(queryKey[0] + '/' + queryKey[1]);
    return response.data;
}


export const addProduct = async (newObj) => {
    const response = await api.post(productApiEndpoint, newObj);
    return response.data;
}


// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐
// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐