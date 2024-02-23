import ProductDetails from "./components/ProductDetails";
import ProductAdd from "./components/ProductAdd";
import Products from "./components/Products";
import { useState } from "react";

const App = () => {
  const [productId, setProductId] = useState(1);

  return (
    <div className="flex">
      <ProductAdd />
      <Products setProductId={setProductId} />
      <ProductDetails id={productId} />
    </div>
  )
}

export default App