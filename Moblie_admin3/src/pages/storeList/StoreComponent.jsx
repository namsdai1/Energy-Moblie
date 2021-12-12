import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./storeComponent.css";

const StoreComponent = () => {
  const stores = useSelector(
    (state) => state.allStores?.stores?.data?.data || []
  );
  const renderList = stores.map((store) => {
    const { _id, name_store, address_store } = store;
    return (
      <tr>
        <td className="itemPrd">{name_store}</td>
        <td className="itemPrd">{address_store}</td>

        <td>
          <Link to={`/store/${_id}`} className="link">
            <p className="viewMoreText">Xem thêm</p>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="listStore">
      <table className="tblOrder">
        <thead>
          <tr>
            <th className="itemPrd">Name</th>
            <th className="itemPrd">Address</th>
            <th className="itemPrd">Action</th>
          </tr>
        </thead>
        <tbody>{renderList}</tbody>
      </table>
    </div>
  );
};

export default StoreComponent;
