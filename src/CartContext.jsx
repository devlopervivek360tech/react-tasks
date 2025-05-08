import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    axios
      .get(" https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("You encounterd an erro code: " + error);
      });
    const storedCart = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartItem(storedCart);
  }, []);

  const addOne = (item) => {
    const updatedCart = cartItem.map((ele) => {
      if (ele.id === item.id) {
        return { ...ele, count: (ele.count || 1) + 1 };
      }
      return ele;
    });

    setCartItem(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const removeOne = (item) => {
    const updatedCart = cartItem.map((ele) => {
      if (ele.id === item.id) {
        if (ele.count > 1) {
          return { ...ele, count: ele.count - 1 };
        } else {
          window.alert("Minimum quantity should be 1");
        }
      }
      return ele;
    });

    setCartItem(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  let subTotal = 0;
  if (Array.isArray(cartItem)) {
    subTotal = cartItem.reduce(
      (sum, item) => sum + item.price * (item.count || 1),
      0
    );
    subTotal = subTotal.toFixed(2);
  }

  const promoCode = () => {
    window.alert(
      "Sorry for inconvenience!! we are currently facing some issue try after some time"
    );
  };

  const deleteItem = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updateCart);
    localStorage.setItem("cartData", JSON.stringify(updateCart));
    window.alert(`Product removed successfully!!`);
  };

  const respectiveItem = (item) => {
    localStorage.setItem("selectedProduct", JSON.stringify(item));
  };

  const addToCart = (item) => {
    let storedData = JSON.parse(localStorage.getItem("cartData")) || [];
    if (!Array.isArray(storedData)) {
      storedData = [];
    }
    let found = storedData.find((product) => product.id === item.id);

    if (found) {
      window.alert(
        `Product "${item.title}" is already in cart. go to cart and increase the count`
      );
    } else {
      const newItem = { ...item, count: 1 }
      const newCartData = [...storedData, item];
      localStorage.setItem("cartData", JSON.stringify(newCartData));
      setCartItem(newCartData);
      window.alert(`Product "${item.title}" added to cart.`);
    }
  };

  const setItemData = (item) => {
    localStorage.setItem("selectedProduct", JSON.stringify(item));
  };
  const getItemData = JSON.parse(localStorage.getItem("selectedProduct"));

  const value = {
    addOne,
    removeOne,
    subTotal,
    promoCode,
    deleteItem,
    respectiveItem,
    addToCart,
    data,
    cartItem,
    setItemData,
    getItemData
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;