import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Title from "../Title";
import SubTitle from "./SubTitle";

const ProductList = ({ cat, filter, sort, limit,title,desc }) => {
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
    <div>
      <div className="text-center text-3xl mb-6">
        {cat?<Title title={title}/>:<Title title={"Collections"}/>}
        {desc?<SubTitle desc={desc}/>:<div></div>}
        
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {filteredProducts.length > 0 ? (
          (limit ? filteredProducts.slice(0, limit) : filteredProducts).map(
            (product, index) => <ProductItem item={product} key={index} />
          )
        ) : (
          <p>No products found....</p>
        )}
      </div>
    
    </div>
  );
};

export default ProductList;
