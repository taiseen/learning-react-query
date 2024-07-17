import { createBrowserRouter } from "react-router-dom";
import ProjectProducts from "../projects/lws-products";
import Layout from "../layout";
import Home from "../home";

export const allRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        // path: '/',
        element: <Layout />,
        children: [
            {
                path: '/lws-products',
                element: <ProjectProducts />,
            },
        ],
    },
]


const router = createBrowserRouter(allRoutes);

export default router;