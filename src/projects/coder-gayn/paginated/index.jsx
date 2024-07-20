import { useSearchParams } from "react-router-dom"
import { usePaginatedProducts } from "../apiServices";

const CGPaginated = () => {

    // get all query parameters value from browser url... by this hook...
    const [urlSearchParams, setUrlSearchParams] = useSearchParams({ limit: 4, skip: 0 });

    const skip = +urlSearchParams.get('skip') || 0;
    const limit = +urlSearchParams.get('limit') || 0;
    const category = urlSearchParams.get('category') || '';
    const searching = urlSearchParams.get('q') || '';


    const { data, isLoading, isError, error } = usePaginatedProducts(limit, skip, searching, category);


    // if (isLoading) return <div className='dataFetchStatus'>Loading...</div>;
    // if (isError) return <div className='dataFetchStatus'>Error: {error.message}</div>;

    const isPrev = limit > skip;
    const isNext = limit + skip >= 100 // data?.total



    // ⏮️--1️⃣2️⃣3️⃣--⏭️
    const handlePagination = (skipLimit) => {

        setUrlSearchParams(pre => {
            pre.set('skip', Math.max(skip + skipLimit, 0));
            return pre;
        });
    }


    // 🔎🔎🔎---🔎🔎🔎---🔎🔎🔎
    const handleSearchProduct = (e) => {
        setUrlSearchParams(pre => {
            pre.set('q', e.target.value);
            pre.set('skip', 0); // reset pagination number from url...
            pre.delete('category'); // delete category from url...
            return pre;
        })
    }


    return (
        <div className="h-screen bg-slate-700 p-5">

            <div className="text-center text-2xl">
                Data...
            </div>


            <div className="mb-3">
                <input
                    type="search"
                    placeholder="Searching..."
                    className="outline-none rounded-sm px-2 py-1"
                    onChange={handleSearchProduct}
                />
            </div>

            <div className="bg-slate-500 text-white p-2 rounded-sm flex gap-3 w-fit">

                <button
                    disabled={isPrev}
                    onClick={() => handlePagination(-limit)}
                    className={`px-2 py-1 rounded-sm duration-300  ${isPrev
                        ? 'bg-gray-400 text-black cursor-not-allowed'
                        : 'bg-blue-400'}`
                    }
                >
                    Prev
                </button>

                <button
                    disabled={isNext}
                    onClick={() => handlePagination(limit)}
                    className={`px-2 py-1 rounded-sm duration-300 ${isNext
                        ? 'bg-gray-400 text-black cursor-not-allowed'
                        : 'bg-blue-400'}`
                    }
                >
                    Next
                </button>

            </div>
        </div>
    )

}

export default CGPaginated