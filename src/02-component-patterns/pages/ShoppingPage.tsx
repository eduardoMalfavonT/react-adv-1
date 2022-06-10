import {
  ProductCard,
  ProductImage,
  ProductButtons,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
