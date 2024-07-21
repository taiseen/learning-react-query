import AddProduct from "../projects/coder-gayn/products/AddProduct";
import CGOptimistic from "../projects/coder-gayn/optimistic/indes";
import CGProduct from "../projects/coder-gayn/products/CGProduct";
import CGParallelQuery from "../projects/coder-gayn/parallel";
import CGPaginated from "../projects/coder-gayn/paginated";
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
        title: 'CG - Products',
        component: CGProducts,
    },
    {
        path: '/coders-gayn-products/:id',
        title: 'CG - Product by id',
        component: CGProduct,
    },
    {
        path: '/coders-gayn-products/add',
        title: 'CG - Add Product',
        component: AddProduct,
    },
    {
        path: '/coders-gayn-products/paginated',
        title: 'CG - Paginated Product',
        component: CGPaginated,
    },
    {
        path: '/coders-gayn-products/parallel',
        title: 'CG - Parallel Query',
        component: CGParallelQuery,
    },
    {
        path: '/coders-gayn-products/optimistic',
        title: 'CG - Optimistic Update',
        component: CGOptimistic,
    },
]

export default routes;