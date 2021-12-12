import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import React, { useEffect } from "react";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatistical } from "../../redux/actions/statisticalAction";

export default function Home() {
  const statistical = useSelector((state) => state.allStatistical?.statistical);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistical());
  }, []);
  console.log("Statistical: ", statistical);
  const price = statistical[11]?.total / 23000;
  const changePrice =
    statistical[11]?.total / 23000 - statistical[10]?.total / 23000;
  let inCrease = changePrice > 0 ? true : false;

  return (
    <div className="home">
      <Chart data={statistical} title="Statiscital" grid dataKey="total" />
      <div className="txtTitle">
        <h2>This month</h2>
      </div>
      <FeaturedInfo
        price={parseInt(price)}
        changePrice={parseInt(changePrice)}
        inCrease={inCrease}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
