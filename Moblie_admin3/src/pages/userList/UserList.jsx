import "./userList.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/userAction";
import UserComponent from "./UserComponent";

export default function UserList() {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log("Users: ", users);

  return (
    <div className="userList">
      <UserComponent />
    </div>
  );
}
