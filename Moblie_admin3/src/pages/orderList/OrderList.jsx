import "./orderList.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBills,
  fetchBills1,
  fetchBills2,
} from "../../redux/actions/billAction";
import OrderComponent from "./OrderComponent";

export default function OrderList() {
  const orders = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBills());
    dispatch(fetchBills1());
    dispatch(fetchBills2());
  }, []);
  console.log("Orders: ", orders);

  return (
    <div className="orderList">
      <OrderComponent />
    </div>
  );
}
