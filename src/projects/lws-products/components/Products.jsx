import { useQuery } from '@tanstack/react-query';
import { getPaginatedProducts } from '../api';
import { useState } from 'react';
import Product from './Product';

const Products = ({ setProductId, setEditProduct }) => {

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    // for data fetching form server we do not use any useEffect...
    // its mean that in client side we do not perform any state management
    // so this state management automatically managed by react-query lib...
    // so this react-query lib ==> give us a hook called -> useQuery() hook
    // by using we leverage all its state management features...
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

    const [page, setPage] = useState(1); // for pagination

    // for 🔎 Read/Get all data functionality... with pagination support...
    const { data: products, error, isLoading } = useQuery({
        queryKey: ['products', { page }],
        queryFn: getPaginatedProducts,

        // queryKey: ['products'], // 🟩 for cashing purpose - set a key, try to same name as api endpoint
        // queryFn: getAllProducts, // 🟩 for data fetching - pass a function & its auto pass/set a parameter

        // retry: false, // 🟩 no auto network request | by default 3 times...
        
        // staleTime: 5000 // 🟩 do not make this data old, until 5 second cross...
        // 🟩 if in server change any data, this staleTime property always listing for new changed data
        
        // refetchInterval: 5000 // 🟩 in every 5 second re-fetch data

        // placeholderData: keepPreviousData 
        // until new data is available, old data will be hold the UI, so that ui do not break its beauty...


    });

    const commonClass = 'w-3/5 h-screen text-5xl grid place-items-center';
    if (isLoading) return <div className={commonClass}>Loading data...</div>
    if (error) return <div className={commonClass}>Error occurred : {error.message}</div>

    return (
        <div className='flex flex-col items-center justify-center w-3/5'>
            <h2 className='text-3xl my-2'>Product List</h2>

            <ul className='flex flex-wrap justify-center items-center'>
                {
                    products.data && products.data.map(item =>
                        <Product
                            item={item}
                            key={item.id}
                            setProductId={setProductId}
                            setEditProduct={setEditProduct}
                        />
                    )
                    // .reverse()
                }
            </ul>

            <div className='flex gap-6'>
                {
                    products.prev && (
                        <button
                            onClick={() => setPage(products.prev)}
                            className='p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm duration-300 hover:bg-gray-300'
                        >
                            Prev
                        </button>
                    )
                }
                {
                    products.next && (
                        <button
                            onClick={() => setPage(products.next)}
                            className='p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm duration-300 hover:bg-gray-300'
                        >
                            Next
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Products;