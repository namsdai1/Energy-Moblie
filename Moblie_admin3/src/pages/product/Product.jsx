import { Link, useParams } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";

export default function Product() {
  const product = useSelector((state) => state.product.data || {});
  const {
    nameProduct,
    id_image,
    price_product,
    quantity_product,
    description_product,
    stock,
  } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log("ID >>>>> ", productId);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, productId]);

  let textStock = stock ? "Yes" : "No";

  const removeProduct = async (id) => {
    await axios
      .delete(`http://localhost:3000/product/delete/${id}`)
      .then((response) => {
        console.log("response: ");
        console.log(response);
        toast("Delete Successed!");
      })
      .catch((error) => {
        toast("Delete Failed! >>> ", error);
        console.error(">>>>>>>>", error);
      });
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={id_image?.nameImage[0]}
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{nameProduct}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">PRICE: </span>
              <span className="productInfoValue">{price_product}đ</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">QUANTITY: </span>
              <span className="productInfoValue">{quantity_product}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">DESCRIPTION: </span>
              <span className="productInfoValue">
                {description_product?.description_product}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">IN STOCK: </span>
              <span className="productInfoValue">{textStock}</span>
            </div>
          </div>
        </div>
        <div className="productTopRight">
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Chip: </span>
              <span className="productInfoValue">
                {description_product?.chip}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">ROM: </span>
              <span className="productInfoValue">
                {description_product?.rom}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">RAM: </span>
              <span className="productInfoValue">
                {description_product?.ram}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Cam: </span>
              <span className="productInfoValue">
                {description_product?.camera_late}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productButtonContainer">
        <Link to={`/edit-product/${productId}`}>
          <button className="productEditButton">Edit</button>
        </Link>
        <Link to="/products">
          <button
            onClick={() => removeProduct(productId)}
            className="productDelButton"
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
}
