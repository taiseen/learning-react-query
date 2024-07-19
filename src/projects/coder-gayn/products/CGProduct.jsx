import { useGetProductById } from "../apiServices";
import { useParams } from "react-router-dom";


const CGProduct = () => {

    const { id } = useParams();

    const { isLoading, isError, error } = useGetProductById(id);

    if (isLoading) return <div className='dataFetchStatus'>Loading...</div>;
    if (isError) return <div className='dataFetchStatus'>Error: {error.message}</div>;



    return (
        <div className="h-screen bg-gray-400 text-center">
            Product by id
        </div>
    )
}

export default CGProduct