import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/products-slice";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/UI/Layout";
import CatalogPage from "./components/pages/CatalogPage";
import CategoryPage from "./components/pages/CategoryPage";
import ProductInfoPage from "./components/pages/ProductInfoPage";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./components/pages/NotFoundPage";
import CartPage from "./components/pages/CartPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Navigate to="catalog" />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="category/:category" element={<CategoryPage />} />
        <Route path="category/:category/:title" element={<ProductInfoPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
