import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart(state, action) {
            let index = state.value.findIndex(el => el.id === action.payload.id)
            if (index < 0) {
                state.value = [...state.value, { ...action.payload, quantity: 1 }]
            }
            localStorage.setItem("cart", JSON.stringify(state.value))
        },
        incCart(state, action) {
            let index = state.value.findIndex(el => el.id === action.payload.id)
            state.value = state.value.map((product, inx) => {
                if (index === inx) {
                    return { ...product, quantity: product.quantity + 1 }
                } else {
                    return product
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.value))

        },
        decCart(state, action) {
            let index = state.value.findIndex(el => el.id === action.payload.id)
            state.value = state.value.map((product, inx) => {
                if (index === inx) {
                    return { ...product, quantity: product.quantity - 1 }
                } else {
                    return product
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.value))

        },
        remuverFromCart() { },
        clearCart() { }
    }
})

export const { addToCart, clearCart, decCart, incCart, remuverFromCart } = cartSlice.actions

export default cartSlice.reducer