import { useContext } from "react";

import noImage from "../assets/no-image.jpg";

import { productContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  img?: string;
  style?: React.CSSProperties | undefined;
}

export const ProductImage = ({ img = "", className, style }: Props) => {
  const { product } = useContext(productContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="Product"
    />
  );
};
