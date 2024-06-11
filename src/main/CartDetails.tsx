import React from "react"
import "./CartDetails.css"
import thumb from "../store/thumb"
import AddToCart from "../addtocart/AddToCart"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { cartActions } from "../store/cart-store"
import Slider from "../slider/slider"




const CartDetails:React.FC = ()=>{
    

    const product = useSelector((state:any)=>state.cart.product)
    
    const dispatch = useDispatch();
    const switchProduct = (id:string)=>{
        let sentObj:any = thumb.find(item=> item.id === id);
        let index: number = (thumb.indexOf(sentObj));
        dispatch(cartActions.showClIckedProduct({sentObj, index}));
        // let a: any = setProductIndex(thumb.indexOf(sentObj));

       
       
    }

    const handleViewProduct = ()=>{
        dispatch(cartActions.closeClickedProduct());
    }



    return(
        <main className="sneakers__site">

            <div className="slider-container">
                <Slider/>
            </div>
            {/* left container of the main page */}
            <div className="sneakers__left">

                <img 
                    className="main__product" 
                    src={product} 
                    alt="sneaker"
                    onClick={handleViewProduct}
                />

                <div className="left__thubnail">

                    {thumb.map(item =>(

                        <img className="main__thumb"
                             key= {item.id} 
                             src={item.thumb} 
                             alt="sneaker thumbnail" 
                            onClick={()=>switchProduct(item.id)}
                        />

                    ))}
                </div>

            </div>

            {/* rigth container of the main page */}

            <div className="sneakers__right">
                <span className="company__name">SNEAKER COMPANY</span>

                <h1 className="main__head">Fall Limited Edition Sneakers</h1>

                <p className="sneaker__details">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div className="price__container">
                    <div className="left">
                        <p className="price_shown">$125.00</p>
                        <button className="dicount">50%</button>
                    </div>

                    <p className="lined-price">$250.00</p>
                </div>

                <AddToCart/>
            </div>

        </main>
    )
}

export default CartDetails