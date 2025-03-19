import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push({
                id: action.payload.id,
                size: action.payload.size,
                info: {
                    image: action.payload.image,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                },
            });
        },
        updateQuantity: (state, action) => {
            const itemUpdate = state.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.size === action.payload.size
            );
            if (itemUpdate) {
                itemUpdate.info.quantity = Math.max(
                    1,
                    Math.min(
                        itemUpdate.info.quantity + action.payload.quantity,
                        9
                    )
                );
            }
        },
        deleteItem(state, action) {
            return state.filter(
                (item) =>
                    !(
                        item.id === action.payload.id &&
                        item.size === action.payload.size
                    )
            );
        },
    },
});

export const { addToCart, updateQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
