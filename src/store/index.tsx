import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cart-store"


const cartStore= configureStore({
    reducer:{
        cart: cartSlice.reducer
    }
})
 
export default cartStore