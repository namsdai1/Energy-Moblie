import React, { useEffect, useState } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBills,
  fetchBills1,
  fetchBills2,
} from "../../redux/actions/billAction";
import Modal from "../modal/Modal";
import useModal from "../modal/useModal";

export default function Topbar() {
  const orders1 = useSelector((state) => state.allOrders.bill1.data);
  const { isShowing, toggle } = useModal();

  const dispatch = useDispatch();

  const newBill = orders1.length;

  useEffect(() => {
    dispatch(fetchBills1());
    showListNotiNewOrder();
  }, [newBill]);

  const showListNotiNewOrder = () => {
    orders1.map((item, index) => {
      return (
        <div className="blockNoti">
          <img
            src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-notification-icon-png-image_1019800.jpg"
            width="25px"
            height="25px"
          />
          <span>Bạn có hóa đơn mới chưa thanh toán {item?.id_bill?._id}</span>
        </div>
      );
    });
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Energy Mobile</span>
        </div>
        <div className="topRight">
          <div onClick={toggle} className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">{newBill}</span>
          </div>
          {/* {showNoti && showListNotiNewOrder()} */}

          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/178812404_2789762594618519_3093253759932660149_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=l3IhEH2RDSEAX9-aDsI&_nc_ht=scontent.fsgn2-6.fna&oh=bff30b73510697e837b2143e7f3aadca&oe=61C661BD"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
}
