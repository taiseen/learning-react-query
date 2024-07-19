import { useAddProduct } from "../apiServices";
import { useState } from "react"


const AddProduct = () => {

    const [productInput, setProductInput] = useState('');

    const { mutate, isPending, isError, isSuccess, error } = useAddProduct();


    if (isPending) return <div className='dataFetchStatus'>Loading...</div>;
    if (isSuccess) return <div className='dataFetchStatus'>Product added..</div>;
    if (isError) return <div className='dataFetchStatus'>Error: {error.message}</div>;
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = { pName: productInput };
        mutate(obj)

        setProductInput('');
    }


    return (
        <div className="text-center p-4 space-y-2">
            <p>Add Product:</p>

            <form
                onSubmit={handleSubmit}
                className="p-2.5 rounded-sm flex gap-2 w-fit mx-auto bg-slate-300"
            >
                <input
                    type="text"
                    value={productInput}
                    className="p-2 outline-none rounded-sm"
                    placeholder="add product..."
                    onChange={e => setProductInput(e.target.value)}
                />

                <button type="submit" className="px-2 py-1 bg-green-600 rounded-sm text-white">
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddProduct