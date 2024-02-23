import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api";

const ProductDetails = ({ id }) => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['products', id],
        queryFn: getProductById,
    });

    const commonClass = 'h-screen grid place-items-center text-4xl';
    if (isLoading) return <div className={commonClass}>Loading data...</div>
    if (error) return <div className={commonClass}>Error occurred : {error.message}</div>

    const { title, thumbnail, description, price, rating } = data;

    return (
        <div className="w-1/5">
            <h1 className="text-3xl my-2 text-center">Product Details</h1>

            <div className="border border-gray-500 bg-gray-100 p-2 text-md rounded flex flex-col items-center gap-2 mt-4">
                <img src={thumbnail} alt={title} className="object-cover h-24 w-36 border rounded m-auto" />
                <p className="font-bold text-2xl">{title}</p>
                <p className="tracking-normal">{description}</p>
                <p>USD: ${price}</p>
                <p>{rating}/5</p>
            </div>
        </div>
    )
}

export default ProductDetails