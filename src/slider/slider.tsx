import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-store";
import previousIcon from "../images/icon-previous.svg";
import nextIcon from "../images/icon-next.svg";
import "./slider.css";

const Slider: React.FC = () => {
  const dispatch = useDispatch();
  const handlePrevious = () => {
    dispatch(cartActions.previous());
  };

  const handleNext = () => {
    dispatch(cartActions.next());
  };

  return (
    <div className="sliders__positioning--container">
      <div className="sliders__container">
        <button onClick={handlePrevious} className="slide__buttons">
          <img src={previousIcon} alt="previous icon" />
        </button>

        <button onClick={handleNext} className="slide__buttons">
          <img src={nextIcon} alt="next icon" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
