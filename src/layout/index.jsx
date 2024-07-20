import { Link, Outlet } from 'react-router-dom';


const Layout = () => {

    return (
        <div>

            <div className='bg-slate-700 fixed top-0 px-2 py-0.5 text-slate-200 border border-orange-500'>
                <Link to="/">Back</Link>
            </div>

            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default Layout;