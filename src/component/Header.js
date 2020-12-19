import React from "react";

function Header(props) {
  console.warn("Header", props.data);
  return (
    <div>
      <div>
        <span className="cart-count">{props.data.length}</span>
      </div>
      <div className="add-to-cart">
        <div>
          <img src="https://www.freeiconspng.com/thumbs/cart-icon/blue-simple-add-cart-icon-2.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Header;
