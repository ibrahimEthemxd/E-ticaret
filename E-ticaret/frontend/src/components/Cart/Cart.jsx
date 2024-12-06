import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./Cart.css";
import CartCoupon from "./CartCoupon";
import CartProgress from "./CartProgress";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <section className="cart-page">
      <div className="container">
        {cartItems.length > 0 ? (
          <div className="cart-page-wrapper">
            <form className="cart-form">
              <CartProgress />
              <div className="shop-table-wrapper">
                <CartTable />
                <CartCoupon />
              </div>
            </form>
            <div className="cart-collaterals">
              <CartTotals />
            </div>
          </div>
        ) : (
          <div className="cart-no-product">
            <h2>Sepetinde ürün bulunmamaktadır.</h2>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate(`/shop`)}
            >
              Alışverişe Başla
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Cart;
