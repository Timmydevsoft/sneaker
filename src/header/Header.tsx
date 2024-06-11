import React from "react";
import sneaker from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import menu from "../images/icon-menu.svg";
import close from "../images/blackclose.svg";
import avatar from "../images/image-avatar.png";
import "./Header.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-store";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const orderCount = useSelector((state: any) => state.cart.orderCount);
  const orderStatus = useSelector((state: any) => state.cart.order);
  const menuStatus = useSelector((state: any) => state.cart.menuStatus);

  const handleMenu = () => {
    dispatch(cartActions.openMenu());
  };

  const ShowCartBasket = () => {
    dispatch(cartActions.showCartBasket());
  };
  return (
    <header className="header">
      <div className="left__most--container">
        <button className="menu__container" onClick={handleMenu}>
          <img src={menu} alt="menu icon" />
        </button>

        <div className="logo">
          <img src={sneaker} alt="logo" />
        </div>

        <nav className={`nav ${menuStatus ? "show" : ""}`}>
          <button onClick={handleMenu} className="close-container">
            <img src={close} alt="" />
          </button>

          <button className="nav_-button">Collections</button>
          <button className="nav_-button">Men</button>
          <button className="nav_-button">Women</button>
          <button className="nav_-button">About</button>
          <button className="nav_-button">Contact</button>
        </nav>
      </div>

      <div className="rigth__most--container">
        <div className="car__container">
          {orderStatus && (
            <button className="cart__number">{orderCount}</button>
          )}
          <img
            onClick={ShowCartBasket}
            className="basket"
            src={cart}
            alt="cart icon"
          />
        </div>

        <img className="profile" src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
