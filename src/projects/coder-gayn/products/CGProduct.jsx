import { useGetProductById } from "../apiServices";
import { useParams } from "react-router-dom";


const CGProduct = () => {

    const { id } = useParams();

    const productId = id === ':id' ? 1 : id;

    const { data, isLoading, isError, error } = useGetProductById(productId);

    
    if (isLoading) return <div className='dataFetchStatus'>Loading...</div>;
    if (isError) return <div className='dataFetchStatus'>Error: {error.message}</div>;


    return (
        <div className="h-screen bg-gray-400 text-center pt-5">
            Product by id

            <div className="group relative w-[250px] mx-auto my-4">

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        src={data.thumbnail}
                        alt={data.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>

                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            {/* <Link to={`${path}/${product.id}`}> */}
                            <span aria-hidden="true" className="absolute inset-0" />
                            {data.title}
                            {/* </Link> */}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">{data.category}</p>
                    </div>

                    <p className="text-sm font-medium text-gray-900">{data.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CGProduct