import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { addNewProduct, editProduct } from "../api";

const ProductAdd = ({ editProductInfo }) => {
    const { id } = editProductInfo;
    const cache = useQueryClient();

    const newProduct = { title: "", description: "", price: 0, rating: 5, thumbnail: "" };
    const [state, setState] = useState(newProduct);
    const [isEdit, setIsEdit] = useState(false);

    const { mutate, isLoading, isSuccess, isError, error } = useMutation({
        mutationFn: isEdit
            ? (updateProduct) => editProduct(updateProduct)
            : (newProduct) => addNewProduct(newProduct),

        onSuccess: () => {
            // 'Data passing' available here by context

            // remove from cache this endpoints data & get new data
            isEdit
                ? cache.invalidateQueries(["products", id])
                : cache.invalidateQueries(["products"]);

            // cache.setQueryData(['random'], { value: 'hardcoded cache data' });

            // alert('New product added...');
        },

        // its always call before start mutationFun...
        onMutate: () => {
            return { greeting: 'Data passing' }
        }
    });

    useEffect(() => {
        if (id) {
            setIsEdit(true)
            setState(editProductInfo)
        }
    }, [id, editProductInfo])

    // only collect user input values...
    const handleChange = (event) => {
        const { name, value, valueAsNumber, type } = event.target;
        const userInput = type === "number" ? valueAsNumber : value;
        setState({ ...state, [name]: userInput });
    };

    const submitData = (e) => {
        e.preventDefault();
        // const id = crypto.randomUUID().toString();
        const newId = Date.now().toString();
        const newProduct = { ...state, id: isEdit ? state.id : newId };
        mutate(newProduct); // post operation by react-query lib...
    };

    if (isLoading) return <span>Submitting...</span>
    if (isError) return <span>Error: {error.message}</span>

    return (
        <div className="w-1/5">
            <h1 className="text-3xl my-2 mb-4 text-center">Product Add</h1>


            {
                isSuccess &&
                <p className={`text-center font-bold
                ${isEdit ? 'text-orange-600' : 'text-blue-600'}`}>
                    Product {isEdit ? 'Updated' : 'Added'}!
                </p>
            }

            <form
                className="flex flex-col ml-2 px-2 rounded border border-gray-400"
                onSubmit={submitData}
            >
                <input
                    type="text"
                    name="title"
                    value={state.title}
                    className="userInput"
                    onChange={handleChange}
                    placeholder="Enter a product title"
                />

                <textarea
                    name="description"
                    onChange={handleChange}
                    value={state.description}
                    className="min-h-20 userInput"
                    placeholder="Enter a product description"
                />

                <input
                    type="number"
                    name="price"
                    value={state.price}
                    className="userInput"
                    onChange={handleChange}
                    placeholder="Enter a product price"
                />

                <input
                    type="text"
                    name="thumbnail"
                    className="userInput"
                    value={state.thumbnail}
                    onChange={handleChange}
                    placeholder="Enter a product thumbnail URL"
                />

                <button
                    type="submit"
                    className={`text-xl p-1 rounded px-4 py-1 my-2 
                    ${isEdit ? 'bg-orange-300' : 'bg-blue-500'}`}
                >
                    {isEdit ? 'Update' : 'Add'} Product
                </button>
            </form >
        </div>
    )
}

export default ProductAdd