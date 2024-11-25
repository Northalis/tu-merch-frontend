import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const filters = {
  categories: ["all", "accessories", "shirt", "bag", "books", "hat"],
};
const ShopPage = () => {
  const [filtersState, setFiltersState] = useState({
    category: "all",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const { category } = filtersState;

  const {
    data: { products = [], totalPages, totalProducts } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    page: currentPage,
    limit: productsPerPage,
  });
  // clear filter func
  const clearFilters = () => {
    setFiltersState({
      category: "all",
    });
  };
  //handle paginating
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  if (isLoading) return <div>Loding...</div>;

  if (error) return <div>Error Loading Product</div>;

  const startProduct = (currentPage - 1) * productsPerPage + 1;
  const endProduct = startProduct + products.length - 1;

  return (
    <>
      <section
        className="section__container bg-primary-light
        "
      >
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In amet vel
          suscipit, adipisci doloremque minus assumenda corporis voluptatum
          necessitatibus officiis praesentium nemo dignissimos unde et! Ab
          doloribus provident placeat dolore?
        </p>
      </section>
      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* left side */}
          <ShopFiltering
            filters={filters}
            filtersState={filtersState}
            setFiltersState={setFiltersState}
            clearFilters={clearFilters}
          />
          {/* right side */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Showing {startProduct} to {endProduct} of {totalProducts} products
            </h3>
            <ProductCards products={products} />

            {/* Pagination Controll */}
            <div className="mt-6 flex justify-center">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  onClick={() => handlePageChange(index + 1)}
                  key={index}
                  className={`px-4 py-2 ${
                    currentPage === index + 1
                      ? "bg-blue-400 text-white"
                      : "bg-gray-300 text-gray-700"
                  } rounded-md mx-1`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
