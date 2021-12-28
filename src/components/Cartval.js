import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
function Cartval({cart}){
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
    }, [cart, cartCount]);
    return (
        <div>
            {cartCount}

        </div>
     )
}

const mapStateToProps = (state) => {
    return {
      cart: state.cartReducer.cart,
    };
  };


export default connect(mapStateToProps)(Cartval);



