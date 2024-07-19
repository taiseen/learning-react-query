import ProductDetails from "./components/ProductDetails";
import ProductAdd from "./components/ProductAdd";
import Products from "./components/Products";
import { useState } from "react";
import "./style/index.css";


const LwsProducts = () => {

    const [productId, setProductId] = useState(1);
    const [editProduct, setEditProduct] = useState({});

    return (
        <div className="flex">
            <ProductAdd editProductInfo={editProduct} />
            <Products setProductId={setProductId} setEditProduct={setEditProduct} />
            <ProductDetails id={productId} />
        </div>
    )
}


export default LwsProducts