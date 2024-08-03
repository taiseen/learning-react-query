import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllTodo } from "./api";

// out custom hooks...
export const useInfiniteScroll = (apiEndpoint) => {

    // library custom hooks...
    return useInfiniteQuery({

        queryKey: [apiEndpoint],

        queryFn: getAllTodo,

        initialPageParam: 1,

        getNextPageParam: (lastPage, allPages) => {

            const isNextPage = lastPage.length > 0
                ? allPages.length + 1
                : undefined;

            return isNextPage;
        },
    });
}