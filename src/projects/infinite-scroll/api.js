import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com'; // /todos?_page=1


const api = axios.create({ baseURL });


export const getAllTodo = async (obj) => {

    const res = await api.get(
        obj.queryKey[0],
        { params: { _page: obj.pageParam } }
    );

    return res.data;
}