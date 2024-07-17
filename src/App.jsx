import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import ProjectProducts from "./projects/lws-products";
import Layout from "./layout";
import Home from "./home";


const App = () => {

  const Loading = () => (
    <div className="h-screen bg-gray-700 flex items-center justify-center text-3xl">
      Loading...
    </div>
  )

  return (
    <Suspense fallback={<Loading />}>

      <BrowserRouter>
        <Routes>

          <Route path={'/'} element={<Home />} exact />

          <Route element={<Layout />}>
            <Route path={'/lws-products'} element={<ProjectProducts />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </Suspense>
  )
}

export default App