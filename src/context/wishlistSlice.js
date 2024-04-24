import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        value: []
    },
    reducers: {
        toggleWishes() {

        }
    },
})

export const { toggleWishes } = wishlistSlice.actions

export default wishlistSlice.reducer