import { useInView } from "react-intersection-observer";
import { useInfiniteScroll } from "./apiService";
import { useEffect } from "react";
import Todo from "./Todo";


const InfiniteScroll = () => {

    const apiEndpoint = 'todos';

    const { ref, inView } = useInView();

    const {
        isLoading, isError, isFetchingNextPage, hasNextPage,
        data, error, fetchNextPage
    } = useInfiniteScroll(apiEndpoint);

    const isBtnDisabled = isFetchingNextPage || !hasNextPage;


    useEffect(() => {
        // infinite scrolling time - fire this function automatically...

        if (inView && hasNextPage) { fetchNextPage(); }
    }, [inView, hasNextPage, fetchNextPage]);


    if (isLoading) {
        return (
            <p className="bg-red-300 p-2 rounded-sm">
                Data Loading...
            </p>
        )
    }


    if (isError) {
        return (
            <p className="bg-red-300 p-2 rounded-sm">
                Error: {error.message}
            </p>
        )
    }


    const allTodo = data?.pages?.map(tasks =>
        tasks.map(task => <Todo key={task.id} task={task} />)
    )


    return (
        <div className="bg-slate-800 h-screen">

            <p className="text-center text-2xl text-white py-4">
                Infinite Scroll by React Query...
            </p>

            <div className="w-[680px] h-[580px] mx-auto border rounded-sm p-3 flex flex-col gap-4 overflow-y-auto bg-slate-500">

                {allTodo}


                <button
                    disabled={isBtnDisabled}
                    onClick={() => fetchNextPage()}
                    className={`bg-green-300 px-4 py-1 rounded-sm w-fit self-center 
                        ${isBtnDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                >
                    {
                        isFetchingNextPage
                            ? 'Loading... 🔃'
                            : hasNextPage
                                ? 'Load more...'
                                : 'Nothing to load 🚫'
                    }
                </button>


                {/* Responsible for - Infinite Scroll */}
                <div ref={ref} />

            </div>

        </div>
    )
}

export default InfiniteScroll