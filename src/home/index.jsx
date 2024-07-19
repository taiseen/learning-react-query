import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div className="h-screen bg-slate-800 text-white p-4 flex flex-col gap-4">

            <h1 className="text-2xl">Practice - Project navigation list...</h1>

            <div className="flex items-center gap-4 flex-wrap">
                <Link
                    to={'/lws-products'}
                    className="px-2.5 py-1.5 border border-indigo-500 text-xl rounded-sm cursor-pointer hover:border-orange-400 duration-300"
                >
                    Lws - Products
                </Link>


                <Link
                    to={'/coders-gayn-products'}
                    className="px-2.5 py-1.5 border border-indigo-500 text-xl rounded-sm cursor-pointer hover:border-orange-400 duration-300"
                >
                    Coders-Gayn - Products
                </Link>


                <Link
                    to={'/coders-gayn-products/2'}
                    className="px-2.5 py-1.5 border border-indigo-500 text-xl rounded-sm cursor-pointer hover:border-orange-400 duration-300"
                >
                    Coders-Gayn - Product by id
                </Link>


                <Link
                    to={'/coders-gayn-products/add'}
                    className="px-2.5 py-1.5 border border-indigo-500 text-xl rounded-sm cursor-pointer hover:border-orange-400 duration-300"
                >
                    Coders-Gayn - Add Product
                </Link>

            </div>
        </div>
    )
}

export default Home