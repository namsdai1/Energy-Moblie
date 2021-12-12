import "./productList.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

export default function ProductList() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products: ", products);

  return (
    <div className="productList">
      <ProductComponent />
    </div>
  );
}
