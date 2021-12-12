import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';
import {
  getProduct,
  getProductByCategorys,
  getProductByCategorysChild,
  getProductById,
} from '../api/product';
import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_BY_CATEGORYS,
  GET_PRODUCT_BY_CATEGORYS_SUCCESS,
  GET_PRODUCT_BY_CATEGORYS_ERROR,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_ERROR,
  GET_PRODUCT_BY_CATEGORYS_CHILD,
  GET_PRODUCT_BY_CATEGORYS_CHILD_ERROR,
  GET_PRODUCT_BY_CATEGORYS_CHILD_SUCCESS,
} from '../actions/ProductAction';
export function* watchgetProducts() {
  yield takeEvery(GET_PRODUCT, getProductSaga);
}
function* getProductSaga(action) {
  const {data} = action;
  const response = yield getProduct(data);
  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        yield put({type: GET_PRODUCT_SUCCESS, response});
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({type: GET_PRODUCT_ERROR, error: response.error});
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
      yield put({type: GET_PRODUCT_ERROR, error: message});
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
    yield put({type: GET_PRODUCT_ERROR, error: message});
  }
}

export function* watchgetProductsByCategories() {
  yield takeEvery(GET_PRODUCT_BY_CATEGORYS, getProductByCategoriesSaga);
}
function* getProductByCategoriesSaga(action) {
  const {data} = action;
  const response = yield getProductByCategorys(data);
  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        yield put({type: GET_PRODUCT_BY_CATEGORYS_SUCCESS, response});
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({
          type: GET_PRODUCT_BY_CATEGORYS_ERROR,
          error: response.error,
        });
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
      yield put({type: GET_PRODUCT_BY_CATEGORYS_CHILD_ERROR, error: message});
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
    yield put({type: GET_PRODUCT_BY_CATEGORYS_ERROR, error: message});
  }
}

//get By ID
export function* watchgetProductsById() {
  yield takeEvery(GET_PRODUCT_BY_ID, getProductByIdSaga);
}
function* getProductByIdSaga(action) {
  const {data} = action;
  const response = yield getProductById(data);
  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        yield put({type: GET_PRODUCT_BY_ID_SUCCESS, response});
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({type: GET_PRODUCT_BY_ID_ERROR, error: response.error});
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
      yield put({type: GET_PRODUCT_BY_ID_ERROR, error: message});
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
    yield put({type: GET_PRODUCT_BY_ID_ERROR, error: message});
  }
}
export function* watchgetProductByCategoriesChildSaga() {
  yield takeEvery(
    GET_PRODUCT_BY_CATEGORYS_CHILD,
    getProductByCategoriesChildSaga,
  );
}
function* getProductByCategoriesChildSaga(action) {
  const {data} = action;
  const response = yield getProductByCategorysChild(data);
  console.log(response);
  console.log('SAGA');
  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        console.log('SAGA');
        yield put({type: GET_PRODUCT_BY_CATEGORYS_CHILD_SUCCESS, response});
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({
          type: GET_PRODUCT_BY_CATEGORYS_CHILD_ERROR,
          error: response.error,
        });
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
      yield put({type: GET_PRODUCT_BY_CATEGORYS_CHILD_ERROR, error: message});
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
    yield put({type: GET_PRODUCT_BY_CATEGORYS_CHILD_ERROR, error: message});
  }
}
