import React from "react";
import thumb from "../store/thumb";
import Slider from "../slider/slider";
import { useSelector, useDispatch } from "react-redux";
import "./Magnified.css";
import { cartActions } from "../store/cart-store";
import X from "../images/X.svg"

const Magnified: React.FC = () => {
  const product = useSelector((state: any) => state.cart.product);

  const dispatch = useDispatch();

  const handleThumbClick = (id: any) => {
    let sentObj: any = thumb.find((item) => item.id === id);
    let index: number = thumb.indexOf(sentObj);
    dispatch(cartActions.showClIckedProduct({ sentObj, index }));
  };

  const handleClose = () => {
    dispatch(cartActions.closeClickedProduct());
  };

  return (
    <div className="maginified_container">
      <div className="mag__content--container">
        <div className="open_close--container">
          <button onClick={handleClose} className="open_close--button">
            <img src={X} alt="cancel icon" />
            {/* <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#FF7D1A"
                fill-rule="evenodd"
              />
            </svg> */}
          </button>
        </div>

        <div className="magnified_thumb_nail--container">
        <img className="mag__product" src={product} alt=" product image" />

          <div className="magnified__nail">
            {thumb.map((item) => (
              <img
                className="mag__thumb"
                key={item.id}
                src={item.thumb}
                onClick={() => {
                  handleThumbClick(item.id);
                }}
                alt="thumbnail image"
              />
            ))}
          </div>
        </div>

        <div className="slider__positioning--container">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Magnified;
