import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], category: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
    },
    addCategory(state, action) {
      const products = action.payload;
      for (const key of products) {
        const existingCategory = state.category.find(
          (item) => item.category === key.category
        );
        if (!existingCategory) {
          state.category.push({
            category: key.category,
            img: key.images[0],
            id: key.id,
          });
        }
      }
    },
  },
});

export const productsActions = productsSlice.actions;

export const getProducts = () => {
  return async (dispatchAction) => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Невозможно извлечь данные");
      }
      const data = await response.json();

      const loadProducts = [];

      for (const key in data.products) {
        loadProducts.push(data.products[key]);
      }

      return loadProducts;
    };

    try {
      const products = await fetchProducts();

      dispatchAction(productsActions.addProducts(products));

      dispatchAction(productsActions.addCategory(products));
    } catch (e) {
      console.log(e);
    }
  };
};

export default productsSlice;
