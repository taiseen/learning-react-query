import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, editProduct } from "../api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProductAdd = ({ editProductInfo }) => {

    const { id, title, description, price, thumbnail } = editProductInfo;

    const [isEdit, setIsEdit] = useState(false);

    const cache = useQueryClient(); // custom hook by lib...

    const { register, handleSubmit, reset, setValue } = useForm(); // custom hook by lib...

    // for data ✅ Add || 📝 Update/Editing functionality...
    const { mutate, isLoading, isError, error } = useMutation({ // custom hook by lib...
        mutationFn: isEdit
            ? (updateProduct) => editProduct(updateProduct)
            : (newProduct) => addNewProduct(newProduct),

        onSuccess: () => {
            // 'Data passing' available here by context

            // remove from cache this endpoints data & get new data
            isEdit
                ? cache.invalidateQueries(["products", id])
                : cache.invalidateQueries(["products"]);

            isEdit
                ? toast.info(`Product Updated...`)
                : toast.success(`Product Added...`)

            isEdit && setIsEdit(false);
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
            setIsEdit(true);
            // edit || update data by react-form-hook lib...
            setValue('title', title);
            setValue('price', price);
            setValue('thumbnail', thumbnail);
            setValue('description', description);
        }
    }, [id, setValue, title, description, price, thumbnail])

    // only collect user input values...
    // const handleChange = (event) => {
    //     const { name, value, valueAsNumber, type } = event.target;
    //     const userInput = type === "number" ? valueAsNumber : value;
    //     setState({ ...state, [name]: userInput });
    // };

    const userInputData = (data) => {
        // e.preventDefault(); // auto managed by lib...

        // const newId = Date.now().toString();
        const newId = crypto.randomUUID().toString();
        const newProduct = { ...data, id: isEdit ? id : newId };
        mutate(newProduct); // post operation by react-query lib...
        reset(); // clear user input fields... after submit data...
    };

    if (isLoading) return <span>Submitting...</span>
    if (isError) return <span>Error: {error.message}</span>

    return (
        <div className="w-1/5">
            <h1 className="text-3xl my-2 mb-4 text-center">Product {isEdit ? 'Update' : 'Add'}</h1>

            <form
                className="flex flex-col ml-2 px-2 rounded border border-gray-400"
                onSubmit={handleSubmit(userInputData)}
            >
                <input
                    type="text"
                    name="title"
                    className="userInput"
                    // value={state.title}
                    // onChange={handleChange}
                    placeholder="Enter a product title"
                    {...register("title", { required: true })}
                />

                <textarea
                    name="description"
                    // onChange={handleChange}
                    // value={state.description}
                    className="min-h-20 userInput"
                    placeholder="Enter a product description"
                    {...register("description", { required: true })}
                />

                <input
                    type="number"
                    name="price"
                    className="userInput"
                    // value={state.price}
                    // onChange={handleChange}
                    placeholder="Enter a product price"
                    {...register("price", { required: true })}
                />

                <input
                    type="text"
                    name="thumbnail"
                    className="userInput"
                    // value={state.thumbnail}
                    // onChange={handleChange}
                    {...register("thumbnail", { required: true })}
                    placeholder="Enter a product thumbnail URL"
                />

                <button
                    type="submit"
                    className={`text-xl rounded py-2 my-2 text-white
                    ${isEdit ? 'bg-blue-600' : 'bg-green-600'}`}
                >
                    {isEdit ? 'Update' : 'Add'} Product
                </button>
            </form >
        </div>
    )
}

export default ProductAdd