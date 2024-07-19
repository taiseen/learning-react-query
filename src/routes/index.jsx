import AddProduct from "../projects/coder-gayn/products/AddProduct";
import CGProduct from "../projects/coder-gayn/products/CGProduct";
import CGProducts from "../projects/coder-gayn/products";
import LwsProducts from "../projects/lws-products";

// const LwsProducts = lazy( async () => import("../projects/lws-products"));

const routes = [
    {
        path: '/lws-products',
        title: 'Lws - Products',
        component: LwsProducts,
    },
    {
        path: '/coders-gayn-products',
        title: 'Coders-Gayn - Products',
        component: CGProducts,
    },
    {
        path: '/coders-gayn-products/:id',
        title: 'Coders-Gayn - Product by id',
        component: CGProduct,
    },
    {
        path: '/coders-gayn-products/add',
        title: 'Coders-Gayn - Add Product',
        component: AddProduct,
    },
]

export default routes;