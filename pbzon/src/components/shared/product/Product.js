import React from "react";
import { useStateValue } from "../../../data-layer/StateProvider";
import "./Product.css";

function Product({ id, title, image, url, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    // Add item to cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        url: url,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <a href={url}>{title}</a>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
