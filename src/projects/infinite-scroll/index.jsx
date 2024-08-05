import { useInView } from "react-intersection-observer";
import { useInfiniteScroll } from "./apiService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Todo from "./Todo";



const InfiniteScroll = () => {

    const apiEndpoint = 'todos';

    const { ref, inView } = useInView();

    const [isReverseScrolling, setIsReverseScrolling] = useState(false);

    const {
        isLoading, isError, isFetchingNextPage, hasNextPage,
        data, error, fetchNextPage
    } = useInfiniteScroll(apiEndpoint);

    const isBtnDisabled = isFetchingNextPage || !hasNextPage;


    // infinite scrolling time - fire this function automatically...
    useEffect(() => {
        if (inView && hasNextPage) { fetchNextPage(); }
    }, [inView, hasNextPage, fetchNextPage]);


    useEffect(() => {
        isReverseScrolling
            ? toast.success(`Scrolling Up... ⬆️`)
            : toast.success(`Scrolling Down... ⬇️`)
    }, [isReverseScrolling])


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

            <header className="w-[680px] mx-auto flex items-center justify-between">
                <p className="text-center text-2xl text-white py-4">
                    Infinite Scroll by React Query...
                </p>

                <div className="flex gap-2 items-center ">
                    <label
                        htmlFor="isReverse"
                        className="cursor-pointer text-yellow-400"
                    >
                        Reverse Scrolling
                    </label>

                    <input
                        id="isReverse"
                        type="checkbox"
                        className="cursor-pointer size-5"
                        checked={isReverseScrolling}
                        onChange={() => setIsReverseScrolling(pre => !pre)}
                    />
                </div>
            </header>

            <section
                style={{
                    flexDirection: isReverseScrolling
                        ? 'column-reverse'
                        : 'column'
                }}
                className="w-[680px] h-[580px] mx-auto border rounded-sm p-3 flex flex-col-reverse gap-4 overflow-y-auto bg-slate-500"
            >

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

            </section>

        </div>
    )
}

export default InfiniteScroll