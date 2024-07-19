import { addProduct, getAllProducts, getProductByIs, productApiEndpoint } from './api';
import { useMutation, useQuery } from '@tanstack/react-query';



// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// server async data/state management...


export const useGetAllProduct = () => {
    return useQuery({
        queryKey: [productApiEndpoint],
        queryFn: getAllProducts,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 60,
    });
}


export const useGetProductById = (id) => {
    return useQuery({
        queryKey: [productApiEndpoint, id],
        queryFn: getProductByIs,
    });
}


export const useAddProduct = () => {
    return useMutation({
        mutationFn: addProduct,
    });
}

// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️