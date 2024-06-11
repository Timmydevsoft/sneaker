import React from "react"

import deleteIcon from "../images/icon-delete.svg"
import { useDispatch } from "react-redux"
import { cartActions } from "../store/cart-store"
import { useSelector } from "react-redux"

const CartOrdered = ()=>{

    const nail = useSelector((state:any)=>state.cart.thumbNail)

    const price = useSelector((state:any)=> state.cart.price);
    const quantity = useSelector((state:any)=>state.cart.quantity)
    const dispatch = useDispatch()

    const deleteOrder = ()=>{
        dispatch(cartActions.showOrder())
    }
    return(
        <React.Fragment>
            <div className="top__content--container">
                <img className="selected__thumb" src={nail} alt="sneaker" />
                <p className="limi_edition--p">Fall limited edition Sneakers $125.00 x {quantity} <span id="real__p">${price}.00</span> </p>
                <img id="delete__icon"  onClick= {deleteOrder} src={deleteIcon} alt="delete icon" />
           </div>
           <button className="checkout__btn">Checkout</button>
        </React.Fragment>
        
    )
}

export default  CartOrdered