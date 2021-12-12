import "./widgetLg.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBills,
  fetchBills1,
  fetchBills2,
} from "../../redux/actions/billAction";
import moment from "moment";
import { formatFloatWithDecimal } from "../../utils/utils";

export default function WidgetLg() {
  const orders1 = useSelector((state) => state.allOrders.bill1.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBills());
    dispatch(fetchBills1());
    dispatch(fetchBills2());
  }, []);

  const Button = ({ type }) => {
    const titleType = type === true ? "Paid" : "Paying";
    return <button className={"widgetLgButton " + type}>{titleType}</button>;
  };

  const renderList = orders1.slice(0, 3).map((order) => {
    const { _id, id_bill, id_store, products, status, total } = order;

    return (
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">{id_bill?.note_bill?.name}</span>
        </td>
        <td className="widgetLgDate">
          {moment(id_bill?.date_bill).format("MMM DD YYYY")}
        </td>
        <td className="widgetLgAmount">{formatFloatWithDecimal(total)}đ</td>
        <td className="widgetLgStatus">
          <Button type={status} />
        </td>
      </tr>
    );
  });

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {renderList}
      </table>
    </div>
  );
}
