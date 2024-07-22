import { keepPreviousData, useMutation, useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    addOptimisticProduct, addProduct, commentsApiEndpoint, fewProductsApiEndpoint,
    getAllProducts, getPaginatedProducts, getPostById, getPostCommentsById,
    getProductById, postsApiEndpoint, productApiEndpoint
} from './api';


// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// server async data/state management...


export const useGetAllProduct = () => {
    return useQuery({
        queryKey: [productApiEndpoint],
        queryFn: getAllProducts,
        refetchOnWindowFocus: false, // 🟢🟢🟢
        staleTime: 1000 * 60 * 60,   // 🟢🟢🟢
    });
}


export const useGetProductById = (id) => {
    return useQuery({
        queryKey: [productApiEndpoint, id],
        queryFn: getProductById,
    });
}


export const useAddProduct = () => {
    return useMutation({
        mutationFn: addProduct,
    });
}

// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩 pagination + searching + filtering...  
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

export const usePaginatedProducts = (limit, skip, searching, category) => {

    return useQuery({
        queryKey: [productApiEndpoint, limit, skip, searching, category],
        queryFn: getPaginatedProducts, // api calling function... 
        placeholderData: keepPreviousData, // hold old data until new data comes... 🟢🟢🟢
        staleTime: 1000 * 60, // data cache for 1min 🟢🟢🟢
    });
}


// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩 parallel query || dynamic query 
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

export const useParallelQuery = (productIds) => {

    return useQueries({
        queries: productIds.map(id => {
            return {
                queryKey: [productApiEndpoint, id],
                queryFn: getProductById, // api calling function... 
            }
        })
    });
}


// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩 optimistic ui update 
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

export const useGetOptimisticProduct = () => {
    return useQuery({
        queryKey: [fewProductsApiEndpoint],
        queryFn: getAllProducts,
        // staleTime: 1000 * 30, // auto refetch after 30 seconds...
    });
}


export const useAddOptimisticProduct = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addOptimisticProduct,

        onSuccess: async () => {
            // rerender ui component for get all latest product data...
            return await queryClient.invalidateQueries({ queryKey: [fewProductsApiEndpoint] });
        },
    });
}


// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩 optimistic ui update 🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

export const useGetPostById = (postId) => {

    return useQuery({
        queryKey: [postsApiEndpoint, postId],
        queryFn: getPostById,
        refetchOnWindowFocus: false, // 🟢🟢🟢
    });
}


export const useGetCommentsByPostId = (commentId) => {

    return useQuery({
        queryKey: [commentsApiEndpoint, commentId],
        queryFn: getPostCommentsById,
        refetchOnWindowFocus: false, // 🟢🟢🟢
        enabled: !!commentId, // dependent get query... 🟢🟢🟢
    });
}


