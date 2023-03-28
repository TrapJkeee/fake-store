import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/products-slice";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/UI/Layout";
import CatalogPage from "./components/pages/CatalogPage";
import CategoryPage from "./components/pages/CategoryPage";
import ProductInfoPage from "./components/pages/ProductInfoPage";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="catalog" element={<CatalogPage />} />
        <Route path="category/:category" element={<CategoryPage />} />
        <Route path="product" element={<ProductInfoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
