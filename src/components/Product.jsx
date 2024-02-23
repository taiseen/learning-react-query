const Product = ({ item, setProductId }) => {

    return (
        <li
            onClick={() => setProductId(+item.id)}
            className='flex flex-col items-center m-2 border rounded cursor-pointer border-purple-400'
        >
            <img
                className='object-cover h-64 w-80 rounded'
                src={item.thumbnail}
                alt={item.title}
            />

            <p className='text-xl my-3'>{item.title}</p>
        </li>
    )
}

export default Product