import {
  ProductCard,
  ProductImage,
  ProductButtons,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
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
        className="bg-dark text-white"
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle title="Cofé" className="text-white" />
            <ProductButtons className="custom-buttons" />
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {/* Si se llega al isMaxCount ocultar */}
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}

            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
