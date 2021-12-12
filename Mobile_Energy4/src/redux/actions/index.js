import {
  ADD_BILL,
  ADD_BILL_NULL,
  GET_BILL,
  GET_BILL_BY_ID,
  GET_BILL_DETAIL_BY_ID,
} from './BillAction';
import {GET_CART, UPDATE_CART} from './CartAction';
import {
  EDIT_LIKE,
  GET_LIKE_BY_USER,
  REMOVE_LIKE,
  STATUS_LIKE,
} from './likeAction';
import {GET_FAVORITE, GET_FAVORITE_BY_ID} from './FavoriteAction';
import {POST_SIGNIN, POST_SIGNUP, LOGOUT} from './LoginAction';
import {
  GET_PRODUCT,
  GET_PRODUCT_BY_CATEGORYS,
  GET_PRODUCT_BY_CATEGORYS_CHILD,
  GET_PRODUCT_BY_ID,
} from './ProductAction';
import {GET_STORE, GET_STORE_BY_ID} from './StoreAction';
import {GETONE_USER, UPDATE_USER} from './UserAction';
import {ADD_COMMENT, GET_COMMENT, GET_COUNT_COMMENT} from './CommentAction';
import {GET_NOTIFICATION_BY_USER} from './NotificationAction';
import {GET_CATEGORY} from './CategoriesAction';

export const loginAction = (user, password) => {
  return {
    type: POST_SIGNIN,
    data: {user, password},
  };
};
export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};
export const signUpAction = user => {
  return {
    type: POST_SIGNUP,
    data: user,
  };
};
export const getProduct = input => {
  return {
    type: GET_PRODUCT,
    data: input,
  };
};
export const getUserByID = id => {
  console.log('run' + id);
  return {
    type: GETONE_USER,
    data: id,
  };
};
export const EditUserByID = input => {
  return {
    type: UPDATE_USER,
    data: input,
  };
};
export const getProductbyCategories = input => {
  return {
    type: GET_PRODUCT_BY_CATEGORYS,
    data: input,
  };
};
export const getCartByUser = input => {
  console.log('dag chay dc chua');
  return {
    type: GET_CART,
    data: input,
  };
};

export const UpdateCartByUser = input => {
  console.log('dag chay dc chua');
  return {
    type: UPDATE_CART,
    data: input,
  };
};

export const getProductbyIdAction = input => {
  return {
    type: GET_PRODUCT_BY_ID,
    data: input,
  };
};

export const getStoreAction = () => {
  console.log('store');
  return {
    type: GET_STORE,
  };
};

// get by id
export const getStoreByIdAction = input => {
  console.log('store');
  return {
    type: GET_STORE_BY_ID,
    data: input,
  };
};
export const addbillNullAction = () => {
  return {
    type: ADD_BILL_NULL,
  };
};
// add bill
export const addBillAction = input => {
  console.log('bill');
  return {
    type: ADD_BILL,
    data: input,
  };
};

// get bill
export const getBillAction = input => {
  console.log('bill');
  return {
    type: GET_BILL,
    data: input,
  };
};
export const getProductByCategoriesChild = input => {
  console.log('action');
  return {
    type: GET_PRODUCT_BY_CATEGORYS_CHILD,
    data: input,
  };
};

// get bill
export const getBillByIdAction = input => {
  console.log('>>>>BillIdAction ' + input);

  return {
    type: GET_BILL_BY_ID,
    data: input,
  };
};

//edit like
export const addLikeAction = input => {
  console.log('>>>>BillIdAction ' + input);
  return {
    type: EDIT_LIKE,
    data: input,
  };
};

//status like
export const checkstatusLikeAction = input => {
  console.log('>>>>StatusAction ' + input);
  return {
    type: STATUS_LIKE,
    data: input,
  };
};

//remove like
export const removeLikeAction = input => {
  console.log('>>>>RemoveAction ' + input);
  return {
    type: REMOVE_LIKE,
    data: input,
  };
};

//get like by user
export const getLikeByUserAction = input => {
  console.log(
    '------------->>>>>>>>>>>>> getLikeByUserAction --------->>>>>>>>>>',
  );
  return {
    type: GET_LIKE_BY_USER,
    data: input,
  };
};

// get bill
export const getBillDetailByIdAction = input => {
  console.log('-------------------bill detail');
  return {
    type: GET_BILL_DETAIL_BY_ID,
    data: input,
  };
};

//get favorite
export const getFavoriteAction = () => {
  console.log('>>>>>>>>>>>favorite action');
  return {
    type: GET_FAVORITE,
  };
};

//get favorite by id
export const getFavoriteById = input => {
  console.log('>>>>>>>>>>>favorite id action');
  return {
    type: GET_FAVORITE_BY_ID,
    data: input,
  };
};

//get comment by id
export const getCommentByProduct = input => {
  console.log('>>>>>>>>>>>favorite id action');
  return {
    type: GET_COMMENT,
    data: input,
  };
};
//add comment by id
export const addComment = input => {
  console.log('>>>>>>>>>>>favorite id action');
  return {
    type: ADD_COMMENT,
    data: input,
  };
};

//count comment by id
export const getCountComment = input => {
  console.log('>>>>>>>>>>>getCountComment id action');
  return {
    type: GET_COUNT_COMMENT,
    data: input,
  };
};

//get notification by user
export const getNotificationByUserAction = input => {
  console.log(
    '==============>>>>>>>>>>>>> getNotificationByUserAction ================>>>>>>>>>>',
  );
  return {
    type: GET_NOTIFICATION_BY_USER,
    data: input,
  };
};

//get Category
export const getCateGoryAction = input => {
  console.log(
    '==============>>>>>>>>>>>>> getCateGoryAction ================>>>>>>>>>>',
  );
  return {
    type: GET_CATEGORY,
    data: input,
  };
};
