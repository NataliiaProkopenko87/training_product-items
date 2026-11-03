import { configureStore } from "@reduxjs/toolkit";
import {productsReducer, addProduct, removeProduct, changeSearchTerm} from "./slices/ProductsSlice";
import {formReducer, changeName, changePrice} from "./slices/formSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        form: formReducer
    }
});

export {store, addProduct, removeProduct, changeSearchTerm, changeName, changePrice};