import { configureStore } from '@reduxjs/toolkit'
import wishlistSlice from './wishlistSlice'
import singleSlice from './singleSlice'

export const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        single: singleSlice
    },
})