import { useSelector } from "react-redux";
import "./App.css";
import Header from "./header/Header";
import Magnified from "./magnified/Magnified";
import CartDetails from "./main/CartDetails";
import CartBasket from "./cartbasket/CartBasket";
import Footer from "./header/footer/Footer";

function App() {
  let status = useSelector((state: any) => state.cart.view);

  const showCart = useSelector((state: any) => state.cart.showCartBasket);

  return (
    <>
      <Header />
      {showCart && <CartBasket />}

      {status && <Magnified />}
      <CartDetails />
      <Footer/>
    </>
  );
}

export default App;
