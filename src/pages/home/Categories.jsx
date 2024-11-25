import React from "react";
import category1 from "../../assets/tie.jpg";
import category2 from "../../assets/tshirt.jpg";
import category3 from "../../assets/tote-bag.jpg";
import category4 from "../../assets/open-book.jpg";
import category5 from "../../assets/golf-cap.png";

import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { name: "Accessories", path: "accessories", image: category1 },
    { name: "Shirt", path: "shirt", image: category2 },
    { name: "Bags", path: "bag", image: category3 },
    {
      name: "Books",
      path: "books",
      image: category4,
    },
    {
      name: "Hat",
      path: "hat",
      image: category5,
    },
  ];
  return (
    <>
      <div className="product__grid">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/categories/${category.path}`}
            className="categories__card"
          >
            <img src={category.image} alt={category.name} />
            <h4>{category.name}</h4>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
