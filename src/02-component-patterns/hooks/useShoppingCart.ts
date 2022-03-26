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
      const productInCart: ProductInCart = oldShippingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShippingCart,
          [product.id]: productInCart,
        };
      }

      // Borrar el producto del carrito

      const { [product.id]: toDelete, ...rest } = oldShippingCart;
      return rest;

      // if (count === 0) {
      // const { [product.id]: toDelete, ...rest } = oldShippingCart;
      // return rest;
      // } else {
      //   return { ...oldShippingCart, [product.id]: { ...product, count } };
      // }
    });
  };
  return { shoppingCart, onProductCountChange };
};
