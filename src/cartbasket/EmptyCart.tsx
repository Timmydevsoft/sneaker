import React from "react"
import "./CartBasket.css"

const EmptyCart:React.FC =()=>{
    return(
        <React.Fragment>
            <p className="empty__p">Your cart is empty</p>
        </React.Fragment>
    )
}

export default EmptyCart