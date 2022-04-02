import { useCallback, useContext } from "react";

import { productContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties | undefined;
}

export const ProductButtons = ({ className, style }: Props) => {
  // TODO: maxCount
  const { counter, increaseBy, maxCount } = useContext(productContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  // TODO: isMaxReached useCalback, dependencias [count, maxCount]
  // TRUE  si el count === maxCount
  // FALSE si no lo es
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
