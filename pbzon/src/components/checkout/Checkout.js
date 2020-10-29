import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../data-layer/StateProvider";
import CheckoutProduct from "../shared/checkout-product/CheckoutProduct";
import Subtotal from "../shared/subtotal/Subtotal";

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        {cart?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your Shopping Basket is empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, click on
              "Add to Cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {cart?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                url={item.url}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
