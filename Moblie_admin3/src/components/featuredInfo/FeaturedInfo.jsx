import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBills2 } from "../../redux/actions/billAction";

export default function FeaturedInfo({ price, changePrice, inCrease }) {
  const orders2 = useSelector((state) => state.allOrders.bill2.data);
  const dispatch = useDispatch();
  let totalAmount = 0;

  useEffect(() => {
    dispatch(fetchBills2());
  }, []);

  console.log("HELLO :>> ", orders2);
  orders2?.forEach((order) => {
    let amount = 0;
    order?.products?.forEach((product) => {
      amount += product?.amount;
    });
    totalAmount += amount;
  });
  console.log("AMOUNT >>> ", totalAmount);
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${price}</span>
          <span className="featuredMoneyRate">
            {changePrice}
            {inCrease ? (
              <ArrowUpward className="featuredIcon" />
            ) : (
              <ArrowDownward className="featuredIcon negative" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney amountProduct">{totalAmount}</span>
          <span className="featuredMoney">products</span>
          {/* <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span> */}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
