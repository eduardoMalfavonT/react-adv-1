import { createContext, ReactElement } from "react";
import useProduct from "../hooks/useProduct";

import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties | undefined;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
