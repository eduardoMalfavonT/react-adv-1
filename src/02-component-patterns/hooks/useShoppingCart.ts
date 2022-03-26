import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});
  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // console.log( count, product);
    setShoppingCart((oldShippingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShippingCart;
        return rest;
      } else {
        return { ...oldShippingCart, [product.id]: { ...product, count } };
      }
    });
  };
  return { shoppingCart, onProductCountChange };
};
