import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += action.payload.quantity;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },

        deleteProduct: (state, action) => {
            const productToRemove = state.products.find(item => item._id === action.payload.id);
            if (productToRemove) {
                state.quantity -= productToRemove.quantity; // Decrease total quantity
                state.total -= productToRemove.price * productToRemove.quantity; // Decrease total price
                state.products = state.products.filter(item => item._id !== action.payload.id);
            }
        },

        resetCartQuantity: (state) => {
            state.quantity = 0; 
            state.total = 0; 
            state.products = []; 
        },

        updateQuantity: (state, action) => {
            const product = state.products.find(item => item._id === action.payload.id);
            if (product) {
                const quantityDifference = action.payload.quantity - product.quantity; // Calculate difference
                state.quantity += quantityDifference; // Update total quantity
                product.quantity = action.payload.quantity; // Update the product quantity
                state.total += quantityDifference * product.price; // Update total based on new quantity
            }
        },
    },
});

export const { addProduct, deleteProduct, resetCartQuantity, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
