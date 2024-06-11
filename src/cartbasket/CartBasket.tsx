import "./CartBasket.css";
import CartOrdered from "./CartOrdered";
import EmptyCart from "./EmptyCart";
import { useSelector } from "react-redux";

const CartBasket: React.FC = () => {
  const orderStatus = useSelector((state: any) => state.cart.order);
  const quantity = useSelector((state:any)=>state.cart.quantity)
  return (
    <div className="cart__basketmain--container">
      <div className="cart__head">
        <h2>Cart</h2>
      </div>

      <div className="cart__body--container">
        {orderStatus && quantity!==0 ? <CartOrdered /> :<EmptyCart />}
      </div>
    </div>
  );
};

export default CartBasket;
