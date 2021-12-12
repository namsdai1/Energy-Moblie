import { combineReducers } from "redux";
import { billReducer, selectedBillReducer } from "./billReducer";
import { categoryReducer, selectedCategoryReducer } from "./categoryReducer";
import { productReducer, selectedProductReducer } from "./productReducer";

import { userReducer, selectedUserReducer } from "./userReducer";
import { statisticalReducer } from "./statisticalReducer";
import { selectedStoreReducer, storeReducer } from "./storeReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  allUsers: userReducer,
  user: selectedUserReducer,
  allCategories: categoryReducer,
  category: selectedCategoryReducer,
  allOrders: billReducer,
  order: selectedBillReducer,
  allStatistical: statisticalReducer,
  allStores: storeReducer,
  store: selectedStoreReducer,
});

export default reducers;
