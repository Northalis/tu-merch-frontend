import React, { useState } from "react";
import ProductCards from "./ProductCards";
import products from "../../data/products.json";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const {
    data: { products = [] } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: "",
    limit: "none",
  });
  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };
  return (
    <>
      <section className="section__container product__container">
        <h2 className="section__header">Trending Products</h2>
        <p className="section__subheader mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus
          excepturi dicta fugit voluptatem quia magni facere dolorem quas, quod
          aliquid eligendi incidunt quibusdam, ipsa assumenda rem!
          Necessitatibus, porro esse.
        </p>
        {/* product card */}
        <div className="mt-12">
          <ProductCards products={products.slice(0, visibleProducts)} />
        </div>
        {/* Load more button */}
        <div className="product__btn">
          {visibleProducts < products.length && (
            <button className="btn" onClick={loadMoreProducts}>
              Load More
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
