import axios from 'axios';

const baseURL = 'http://localhost:8000/';
// const baseURL = 'https://dummyjson.com/';

const api = axios.create({ baseURL });

export const fewProductsApiEndpoint = 'fewProducts';
export const commentsApiEndpoint = 'comments';
export const productApiEndpoint = 'products';
export const postsApiEndpoint = 'posts';



// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐
// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐
// only responsible for [[[api calling]]]...

export const getAllProducts = async ({ queryKey }) => {
    // this { queryKey } auto supply by useQuery hook...
    const response = await api.get(queryKey[0]);
    return response.data;
}


export const getProductById = async ({ queryKey }) => {

    const apiEndpoint = queryKey[0];
    const id = queryKey[1];

    const response = await api.get(apiEndpoint + '/' + id);
    return response.data;
}


export const addProduct = async (newObj) => {
    const response = await api.post(productApiEndpoint, newObj);
    return response.data;
}


// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐
// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐


export const getPaginatedProducts = async ({ queryKey }) => {

    const apiEndpoint = queryKey[0];
    const limit = queryKey[1];
    const skip = queryKey[2];
    const search = queryKey[3];
    const category = queryKey[4];

    let url;
    if (search) {
        url = `${apiEndpoint}/search?limit=${limit}&skip=${skip}q=${search}`
    } else if (category) {
        url = `${apiEndpoint}/category/${category}?limit=${limit}&skip=${skip}`
    } else {
        url = `${apiEndpoint}?limit=${limit}&skip=${skip}`;
    }

    const response = await api.get(url);
    return response.data;
}


// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐
// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐


export const addOptimisticProduct = async (newObj) => {
    const response = await api.post(fewProductsApiEndpoint, newObj);
    return response.data;
}


// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐
// 🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐🌐

export const getPostById = async ({ queryKey }) => {
    const apiEndpoint = queryKey[0];
    const id = queryKey[1];

    const response = await api.get(apiEndpoint + '/' + id);
    return response.data;
}

export const getPostCommentsById = async ({ queryKey }) => {
    const apiEndpoint = queryKey[0];
    const id = queryKey[1];

    const response = await api.get(apiEndpoint + '/' + id);
    return response.data;
}
