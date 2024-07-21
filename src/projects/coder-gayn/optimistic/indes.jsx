import { useAddOptimisticProduct, useGetOptimisticProduct } from "../apiServices";


const CGOptimistic = () => {

  const { isLoading, isError, error, data } = useGetOptimisticProduct();

  const { mutate, isPending, variables } = useAddOptimisticProduct();


  if (isLoading) return <div className='dataFetchingStatus'>Loading...</div>;
  if (isError) return <div className='dataFetchingStatus'>Error: {error.message}</div>;


  const handleSubmit = (e) => {
    e.preventDefault();

    const pName = e.target.elements.pName.value;

    const obj = { id: crypto.randomUUID(), title: pName }

    mutate(obj);
  }

  const handleRetry = (postObj) => mutate(postObj);


  return (
    <div className='h-screen p-4 bg-slate-700 text-slate-300'>
      <div className="w-[900px] mx-auto p-2 rounded border border-slate-500">

        <h1 className="text-center p-2 text-2xl">Optimistic Update</h1>


        <div className="flex gap-2 mt-2 h-[600px] overflow-hidden">

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 flex-1 text-black"
          >
            <input
              type="text"
              name="pName"
              placeholder="Product name..."
              className="px-2 py-1.5 rounded-sm outline-none w-full"
            />

            <button
              type="submit"
              className="w-full bg-emerald-400 py-1.5 rounded-sm"
            >
              Add Product
            </button>
          </form>


          <div
            className="flex flex-col gap-2 flex-1 overflow-y-auto"
          >

            {
              // Optimistic update ui effect...
              // ☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️
              // ☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️
              // when this isPending become false :- then this div element remove from dom...
              isPending &&
              (
                <div
                  key={variables.id}
                  className="p-2 rounded border border-slate-500 opacity-60 bg-slate-800"
                >
                  {data.length + 1} | {variables.title}
                </div>
              )
              // ☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️
              // ☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️☑️
            }

            {
              isError &&
              (
                <div
                  key={variables.id}
                  className="p-2 rounded border border-slate-500 opacity-60 bg-slate-800 relative"
                >
                  {data.length + 1} | {variables.title}

                  <button
                    className="absolute top-0 bottom-0 right-0 px-2 py-1 bg-red-400 text-black"
                    onClick={() => handleRetry(variables)}
                  >
                    Retry
                  </button>
                </div>
              )
            }


            {
              data?.map((obj, idx) => (
                <div
                  key={obj.id}
                  className="p-2 rounded border border-slate-500"
                >
                  {idx + 1} | {obj.title}
                </div>
              )).reverse()
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default CGOptimistic