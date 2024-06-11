import "./AddToCart.css";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-store";

const AddToCart = () => {
  const dispatch = useDispatch();

  const quantity = useSelector((state: any) => state.cart.quantity);

  const palceAddToCart = () => {
    if (quantity === 0) {
      return;
    } else {
      dispatch(cartActions.showOrder());
    }
  };

  const handleIncrement = () => {
    dispatch(cartActions.increaseQuantity());
  };

  const handleDecrement = () => {
    dispatch(cartActions.reduceQuantity());
  };

  return (
    <div className="container__adtocart">
      <div className="cart__button--container">
        <button onClick={handleDecrement} className="reduce__button">
          -
        </button>

        <p className="catval">{quantity}</p>

        <button onClick={handleIncrement} className="add__button">
          +
        </button>
      </div>
      <button onClick={palceAddToCart} className="add__tocart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
