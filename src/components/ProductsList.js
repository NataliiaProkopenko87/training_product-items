import {useSelector, useDispatch} from "react-redux";
import {removeProduct} from "../store/slices/productsSlice";
import { createSelector } from "@reduxjs/toolkit";

const memorizedProducts = createSelector([
    (state) => state.products.data,
    (state) => state.products.searchTerm,
    (state) => state.products.name],
    (data, searchTerm, name) => {
        const filteredProducts = data.filter((product) => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return {
        products: filteredProducts,
        name: name,
    };
});

function ProductsList () {

    const dispatch = useDispatch();

    const {products, name} = useSelector(memorizedProducts);

    const handleProductDelete = (product) => {
        dispatch(removeProduct(product.id));
    };

    const renderedProducts = products.map((product) => {
        const bold = name && product.name.toLowerCase().includes(name.toLowerCase());
        return (
        <div key={product.id} className={`panel ${bold ? 'is-bold' : ''}`}>
            <p>{product.name} - ${product.price}</p>
            <button className="button is-danger"
            onClick={() => handleProductDelete(product)}>
                Delete
                </button>
        </div>
        );
    })
    return (
        <div className="products-list">
            {renderedProducts}
            <hr />
            </div>
    );
}

export default ProductsList;