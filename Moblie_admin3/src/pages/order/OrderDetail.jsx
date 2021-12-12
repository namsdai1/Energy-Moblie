import "./orderDetail.css";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBill, removeSelectedBill } from "../../redux/actions/billAction";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import utils from "../../utils";

const OrderDetail = () => {
  const order = useSelector((state) => state.order.data || {});
  const { id_bill, id_store, products, status, total } = order;
  const { orderId } = useParams();
  const dispatch = useDispatch();
  console.log("ID >>>>> ", orderId);

  useEffect(() => {
    if (orderId && orderId !== "") dispatch(fetchBill(orderId));
    return () => {
      dispatch(removeSelectedBill());
    };
  }, [dispatch, orderId]);

  const _handleConfirmOrder = async (id) => {
    await axios
      .post(`http://localhost:3000/bill/payment/${id}`)
      .then((response) => {
        console.log("response: ");
        console.log(response);
        toast("Confirm successfully!");
        alert("Xác nhận thành công!!");
      })
      .catch((error) => {
        toast("Confirm failed >>> ", error);
        console.error(">>>>>>>>", error);
      });
  };

  console.log("PRDĐ >> ", products);

  const renderProduct =
    // products.length > 0 ?
    products?.map((product) => {
      const { _id, id_product, amount } = product;
      const finalPrice = id_product?.price_product * amount;
      let stock_text = id_product?.stock ? "Còn hàng" : "Hết hàng";
      return (
        //   <div className="four wide">
        <tr>
          <td className="itemPrd">
            <img
              src={id_product?.id_image?.nameImage[0]}
              width="80px"
              height="80px"
            />
          </td>
          <td className="itemPrd">{id_product?.nameProduct}</td>
          <td className="itemPrd">{id_product?.price_product}đ</td>
          <td className="itemPrd">{stock_text}</td>
          <td className="itemPrd">{amount}</td>
          <td className="itemPrd">{finalPrice}đ</td>
          {/* <td className="itemIcon">
          <Link to={`/user/${_id}`}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/17/05/20/info-2150938_1280.png"
              width="22px"
              height="22px"
            />
          </Link>
        </td> */}
        </tr>
        //   </div>
      );
    });

  const state = status === utils.paid ? "Paid" : "Paying";
  const statusColor = status === utils.paid ? "blueColor" : "redColor";

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Order details</h1>
        <Link to="/orders">
          <button
            onClick={() => _handleConfirmOrder(orderId)}
            className="productAddButton"
          >
            Confirm
          </button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">Order ID: DON.{orderId}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Date: </span>
              <span className="productInfoValue">
                {moment(id_bill?.date_bill).format("HH:mm:ss | DD/MM/YYYY")}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Store: </span>
              <span className="productInfoValue">{id_store?.name_store}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Address: </span>
              <span className="productInfoValue">
                {id_store?.address_store}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">State: </span>
              <span className={`productInfoValue ${statusColor}`}>{state}</span>
            </div>
          </div>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">Customer</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Name: </span>
              <span className="productInfoValue">
                {id_bill?.note_bill?.name}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Phone number: </span>
              <span className="productInfoValue">
                {id_bill?.note_bill?.phone}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Total: </span>
              <span className="productInfoValue">{total}đ</span>
            </div>
            {/* <div className="productInfoItem">
              <span className="productInfoKey">Cam: </span>
              <span className="productInfoValue">
                {description_product?.camera_late}
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="prdListOrderContainer">
        <h2 className="prdListOrder">Products order</h2>
        {/* <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link> */}
      </div>
      <div className="productBottom">
        <table className="tblOrder">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{renderProduct}</tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
