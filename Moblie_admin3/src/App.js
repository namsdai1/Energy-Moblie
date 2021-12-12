import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import EditProduct from "./pages/newProduct/EditProduct";
import { ToastContainer, toast } from "react-toastify";
import OrderList from "./pages/orderList/OrderList";
import OrderDetail from "./pages/order/OrderDetail";
import StoreList from "./pages/storeList/StoreList";
// import Login from "./pages/login/Login";
// import AppContainer from "./routes/AppContainer";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          {/* <Route exact path="/" component={Login} />
        <AppContainer /> */}
          <Route exact path="/" component={Home} />
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/stores">
            <StoreList />
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
      </div>
    </Router>
  );
}

export default App;
