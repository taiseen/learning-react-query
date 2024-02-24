import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productDeleteById } from "../api";

const Product = ({ item, setProductId, setEditProduct }) => {

    const cache = useQueryClient();

    // for data ❌ Delete functionality...
    const { mutate } = useMutation({
        mutationFn: (id) => productDeleteById(id),
        onSuccess: () => {
            // remove from cache this endpoints data & get new data
            // so we can say - by this we get live update
            cache.invalidateQueries(["products"]);
        },
    })

    const handleProductEdit = (e, item) => {
        e.stopPropagation();
        setEditProduct(item);
    }

    const handleProductDelete = (e, id) => {
        e.stopPropagation();
        if (confirm('Are you shure to delete this product')) {
            mutate(id);
        }
    }

    return (
        <li
            onClick={() => setProductId(item.id)}
            className='flex flex-col items-center m-2 border rounded cursor-pointer border-purple-400'
        >
            <img
                className='object-cover h-64 w-80 rounded'
                src={item.thumbnail}
                alt={item.title}
            />

            <p className='text-xl my-3'>{item.title}</p>

            <div className="flex justify-evenly w-full mb-1">
                <button
                    className="py-1 w-16 bg-orange-400 rounded"
                    onClick={(e) => handleProductEdit(e, item)}
                >
                    Edit
                </button>

                <button
                    className="py-1 w-16 bg-red-400 rounded"
                    onClick={(e) => handleProductDelete(e, item.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}

export default Product