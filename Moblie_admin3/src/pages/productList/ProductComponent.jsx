import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./productComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products.data);
  const renderList = products.map((product) => {
    const {
      _id,
      nameProduct,
      id_image,
      price_product,
      id_category,
      quantity_product,
      stock,
    } = product;
    let stock_text = stock ? "true" : "false";
    return (
      <tr>
        <td className="itemPrd">
          <img src={id_image?.nameImage[0]} width="80px" height="80px" />
        </td>
        <td className="itemPrd">{nameProduct}</td>
        <td className="itemPrd">{price_product}đ</td>
        <td className="itemPrd">{quantity_product}</td>
        <td className="itemPrd">{stock_text}</td>
        <td>
          <Link to={`/product/${_id}`} className="link">
            <p className="viewMoreText">Xem thêm</p>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="listProduct">
      <table className="tblOrder">
        <thead>
          <tr>
            <th className="itemPrd">Image</th>
            <th className="itemPrd">Name</th>
            <th className="itemPrd">Price</th>
            <th className="itemPrd">Quantity</th>
            <th className="itemPrd">Stock</th>
            <th className="itemPrd">Action</th>
          </tr>
        </thead>
        <tbody>{renderList}</tbody>
      </table>
    </div>
  );
};

export default ProductComponent;
