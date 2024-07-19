import { Link } from "react-router-dom";
import routes from "../routes";


const Home = () => {

    return (
        <div className="h-screen bg-slate-800 text-white p-4 flex flex-col gap-4">

            <h1 className="text-2xl">Practice - Project navigation list...</h1>

            <div className="flex items-center gap-4 flex-wrap">
                {
                    routes.map(obj => (
                        <Link
                            to={obj.path}
                            key={obj.path}
                            className="px-2.5 py-1.5 border border-indigo-500 text-xl rounded-sm cursor-pointer hover:border-orange-400 duration-300"
                        >
                            {obj.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home