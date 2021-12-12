import "./storeList.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStores } from "../../redux/actions/storeAction";
import StoreComponent from "./StoreComponent";

export default function StoreList() {
  const stores = useSelector((state) => state.allStores.stores.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStores());
  }, []);
  console.log("Stores: ", stores);

  return (
    <div className="storeList">
      <StoreComponent />
    </div>
  );
}
