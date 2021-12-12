import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./userComponent.css";
import moment from "moment";

const UserComponent = () => {
  const users = useSelector((state) => state.allUsers.users.data);
  console.log("USERSSS >> ", users);
  const renderList = users.map((user) => {
    const {
      _id,
      email_user,
      name_user,
      phone_user,
      address_user,
      avt_user,
      gender_user,
      born_day,
    } = user;
    const avt = avt_user
      ? avt_user
      : "https://www.pinclipart.com/picdir/big/11-110975_available-app-store-vector-online-store-icon-png.png";

    const birthday =
      born_day !== null ? moment(born_day).format("DD/MM/YYYY") : "Null";

    return (
      //   <div className="four wide">
      <tr>
        <td>
          <img src={avt} width="60px" height="60px" />
        </td>
        <td>{name_user}</td>
        <td>{email_user}</td>
        <td>(+84){phone_user}</td>
        <td>{address_user}</td>
        <td>{gender_user}</td>
        <td>{birthday}</td>
        <td className="itemIcon">
          <Link to={`/user/${_id}`}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/17/05/20/info-2150938_1280.png"
              width="22px"
              height="22px"
            />
          </Link>
        </td>
      </tr>
      //   </div>
    );
  });

  return (
    <div className="ui container">
      {/* <div className="newOrderButton">
        <p className="txtTitle">Users List</p>
      </div> */}
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Adress</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderList}</tbody>
      </table>
    </div>
  );
};

export default UserComponent;
