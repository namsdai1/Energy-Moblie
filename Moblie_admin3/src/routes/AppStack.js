import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import EditProduct from "../pages/newProduct/EditProduct";
import NewProduct from "../pages/newProduct/NewProduct";
import NewUser from "../pages/newUser/NewUser";
import OrderDetail from "../pages/order/OrderDetail";
import OrderList from "../pages/orderList/OrderList";
import UserList from "../pages/orderList/OrderList";
import Product from "../pages/product/Product";
import ProductList from "../pages/productList/ProductList";
import User from "../pages/user/User";

export const AppStack = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/users">
      <UserList />
    </Route>
    <Route path="/user/:userId">
      <User />
    </Route>
    <Route path="/newUser">
      <NewUser />
    </Route>
    <Route path="/products">
      <ProductList />
    </Route>
    <Route path="/product/:productId">
      <Product />
    </Route>
    <Route path="/newproduct">
      <NewProduct />
    </Route>
    <Route path="/edit-product/:productId">
      <EditProduct />
    </Route>
    <Route path="/orders">
      <OrderList />
    </Route>
    <Route path="/order/:orderId">
      <OrderDetail />
    </Route>
  </Switch>
);

export default AppStack;
