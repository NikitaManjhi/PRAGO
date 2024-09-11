import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProductList = ({ cat, filter, sort, limit }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/api/products?category=${cat}`
            : "http://localhost:3000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [cat]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) => {
        return Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        );
      })
    );
  }, [products, cat, filter]);

  // Sorting
  useEffect(() => {
    if (sort === "new") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="p-4">
      <div className="flex flex-wrap ">
        {filteredProducts.length > 0 ? (
          (limit ? filteredProducts.slice(0, limit) : filteredProducts).map(
            (productItem, index) => <Product item={productItem} key={index} />
          )
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
