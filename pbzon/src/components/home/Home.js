import React from "react";
import dataBest from "../../reports/data_best.json";
import dataProducts from "../../reports/data_products.json";
import Product from "../shared/product/Product";
import "./Home.css";

function Home() {
  const bestProduct = dataBest.map((data) => {
    return (
      <div className="home__row">
        <Product
          id={data.asin}
          title={data.title}
          price={data.price}
          rating={5}
          image={data.image}
        />
      </div>
    );
  });

  const products = dataProducts.map((data) => {
    return (
      <div className="home__product">
        <Product
          id={data.asin}
          title={data.title}
          price={data.price}
          rating={4}
          image={data.image}
        />
      </div>
    );
  });

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Movie/SENG_2020_GWBleedingHero_1500x600_Final_en-US_HO_CFQuote_._CB417380799_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      {bestProduct}
      <div className="home__row_scroll">{products}</div>
    </div>
  );
}

export default Home;
