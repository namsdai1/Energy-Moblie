import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";

export default function WidgetSm() {
  const users = useSelector((state) => state.allUsers.users.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log("USER List :> ", users);

  const renderListNewMember = users.slice(0, 5).map((user) => {
    const { _id, email_user, name_user, phone_user, avt_user } = user;
    const avt = avt_user
      ? avt_user
      : "https://www.pinclipart.com/picdir/big/11-110975_available-app-store-vector-online-store-icon-png.png";

    return (
      <li className="widgetSmListItem">
        <img src={avt} alt="" className="widgetSmImg" />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">{name_user}</span>
          <span className="widgetSmUserTitle">{email_user}</span>
        </div>
        <Link to={`/user/${_id}`} className="link">
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </Link>
      </li>
    );
  });

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">{renderListNewMember}</ul>
    </div>
  );
}
