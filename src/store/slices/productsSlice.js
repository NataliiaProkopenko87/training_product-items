import {createSlice, nanoid} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addProduct(state, action) {
                state.data.push({
                    name: action.payload.name,
                    price: action.payload.price,
                    id: nanoid()
                });
            },
            removeProduct(state, action) {
                const updated = state.data.filter((product) => {
                    return product.id !== action.payload;
                });
                state.data = updated;
            }
        }
});

export const {addProduct, removeProduct, changeSearchTerm} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;