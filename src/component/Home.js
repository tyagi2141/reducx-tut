import React from "react";

function Home(props) {
  console.warn("home", props.data);
  return (
    <div>
      <h1>tyagi...</h1>

      <div className="head">
        <div className="images">
          <img src="https://webstockreview.net/images/clipart-phone-iphone-9.png" />
        </div>
        <div>
          <span> i phone 10</span>
        </div>
        <div>
          <span>10000</span>
        </div>
        <div></div>
        <div>
          <button
            onClick={() => {
              props.addToCartHandler({ price: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
