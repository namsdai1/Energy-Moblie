import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./orderComponent.css";
import moment from "moment";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatFloatWithDecimal } from "../../utils/utils";

const OrderComponent = () => {
  const orders = useSelector((state) => state.allOrders.bills.data);
  const orders1 = useSelector((state) => state.allOrders.bill1.data);
  const orders2 = useSelector((state) => state.allOrders.bill2.data);
  console.log("ORDERSSS >> ", orders);

  const renderList1 = orders1.map((order) => {
    const { _id, id_bill, id_store, products, status, total } = order;
    const store = id_store?.store ? id_store?.store : "Bến Đò 1, Củ Chi";
    const state = status === true ? "Paid" : "Paying";

    return (
      <tr>
        <td>{id_bill?.note_bill?.name}</td>
        <td>{id_bill?.note_bill?.phone}</td>
        <td>{moment(id_bill?.date_bill).format("HH:mm | DD/MM/YYYY")}</td>
        <td>{store}</td>
        <td>{total}đ</td>
        <td className="statusText1">{state}</td>
        <td>
          <Link to={`/order/${_id}`} className="link">
            <td className="viewMoreText">Xem thêm</td>
          </Link>
        </td>
      </tr>
    );
  });
  const renderList2 = orders2.map((order) => {
    const { _id, id_bill, id_store, products, status, total } = order;
    const store = id_store?.name_store
      ? id_store?.name_store
      : "Bến Đò 1, Củ Chi";
    const state = status === true ? "Paid" : "Paying";

    return (
      <tr>
        <td>{id_bill?.note_bill?.name}</td>
        <td>{id_bill?.note_bill?.phone}</td>
        <td>{moment(id_bill?.date_bill).format("HH:mm | DD/MM/YYYY")}</td>
        <td>{store}</td>
        <td>{total}đ</td>
        <td className="statusText2">{state}</td>
        <td>
          <Link to={`/order/${_id}`} className="link">
            <td className="viewMoreText">Xem thêm</td>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div className="ui container">
      <table className="tblOrder">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date Time</th>
            <th>Store</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderList1}
          {renderList2}
        </tbody>
      </table>
    </div>
  );
};

export default OrderComponent;
