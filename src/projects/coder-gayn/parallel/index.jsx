import useScrollToBottom from "../../hook/useScrollToBottom";
import { useParallelQuery } from "../apiServices";
import { useState } from "react"


const CGParallelQuery = () => {


    const [productIds, setProductIds] = useState([1, 2, 3]);

    const multipleQuery = useParallelQuery(productIds);

    const scrollToBottom = useScrollToBottom(multipleQuery);


    const handleLoadMore = () => setProductIds(pre => [...pre, pre.length + 1]);


    return (
        <div className='h-screen p-4 bg-slate-700 text-slate-300'>

            <div className="w-[700px] mx-auto p-2 rounded border border-slate-500 h-[600px] overflow-hidden">

                <h1 className="text-center p-2 text-2xl">Parallel Query || Dynamic Query</h1>

                <div>
                    <button
                        className={`px-2 py-1 mb-2 rounded-sm bg-blue-500`}
                        onClick={handleLoadMore}
                    >
                        Load more
                    </button>
                </div>


                <div className="flex flex-col gap-2 h-[85%] overflow-y-auto">
                    {
                        multipleQuery?.map((obj, idx) =>
                            <div
                                className="p-2 rounded border border-slate-500"
                                key={idx}
                            >
                                {obj?.data?.id} | {obj?.data?.title}
                            </div>
                        )
                    }

                    <div ref={scrollToBottom} />
                </div>

            </div>
        </div>
    )
}

export default CGParallelQuery