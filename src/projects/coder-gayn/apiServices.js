import { addProduct, getAllProducts, getPaginatedProducts, getProductByIs, productApiEndpoint } from './api';
import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';



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


// pagination + searching + filtering...

export const usePaginatedProducts = (limit, skip, searching, category) => {

    return useQuery({
        queryKey: [productApiEndpoint, limit, skip, searching, category],
        queryFn: getPaginatedProducts, // api calling function... 
        placeholderData: keepPreviousData, // hold old data until new data comes...
        staleTime: 1000 * 60, // data cache for 1min 
    });
}


// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️


