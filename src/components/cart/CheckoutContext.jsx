"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

// export const CheckoutContext = createContext(undefined);
export const CheckoutContext = createContext({});

export function CheckoutProvider({ children }) {
  const { cart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [shipping, setShipping] = useState(0);
  const [prodsWithQt, setProdsWithQt] = useState([]);
  const [order, setOrder] = useState({});
  const [cuppon, setCuppon] = useState({});

  useEffect(() => {
    if (cart.length === 0) return; // Avoid unnecessary requests

    const fetchCartProducts = async () => {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      const data = await res.json();
      if (!data) return;
      const dataa = data.products.map((prod) => {
        return { _id: prod._id, price: prod.price, qt: 1 };
      });
      //   console.log("ff", data.products);
      setProducts(data.products);
      setProdsWithQt(dataa);
    };

    fetchCartProducts();
  }, [cart]);

  const rmvQt = (index) => {
    if (prodsWithQt[index].qt > 1) {
      setProdsWithQt((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, qt: item.qt - 1 } : item
        )
      );
    }
  };
  const addQt = (index) => {
    setProdsWithQt((prev) =>
      prev.map((item, i) => (i === index ? { ...item, qt: item.qt + 1 } : item))
    );
  };

  return (
    <CheckoutContext.Provider
      value={{
        products,
        prodsWithQt,
        addQt,
        rmvQt,
        shipping,
        setShipping,
        order,
        setOrder,
        cuppon,
        setCuppon,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutContext;
