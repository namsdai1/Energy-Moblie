import {
  addCommentsApi,
  getCommentsApi,
  getCountCommentsApi,
} from '../api/commen';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';
import {
  ADD_COMMENT,
  ADD_COMMENT_ERROR,
  ADD_COMMENT_SUCCESS,
  GET_COMMENT,
  GET_COMMENT_ERROR,
  GET_COMMENT_SUCCESS,
  GET_COUNT_COMMENT,
  GET_COUNT_COMMENT_ERROR,
  GET_COUNT_COMMENT_SUCCESS,
} from '@redux/actions/CommentAction';

export function* watchGetComment() {
  yield takeEvery(GET_COMMENT, getCommentsSaga);
}
function* getCommentsSaga(action) {
  console.log('runid');
  const {data} = action;
  const response = yield getCommentsApi(data);
  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        yield put({type: GET_COMMENT_SUCCESS, response});
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({type: GET_COMMENT_ERROR, error: response.error});
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
      yield put({type: GET_COMMENT_ERROR, error: message});
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
    yield put({type: GET_COMMENT_ERROR, error: message});
  }
}

export function* watchAddComment() {
  yield takeEvery(ADD_COMMENT, addCommentsSaga);
}
function* addCommentsSaga(action) {
  console.log('runid');
  const {data} = action;
  const response = yield addCommentsApi(data);
  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        yield put({type: ADD_COMMENT_SUCCESS, response});
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({type: ADD_COMMENT_ERROR, error: response.error});
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
      yield put({type: ADD_COMMENT_ERROR, error: message});
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
    yield put({type: ADD_COMMENT_ERROR, error: message});
  }
}

export function* watchgetCountComment() {
  yield takeEvery(GET_COUNT_COMMENT, getCountCommentsSaga);
}
function* getCountCommentsSaga(action) {
  console.log('runid');
  const {data} = action;
  const response = yield getCountCommentsApi(data);
  try {
    // kiem tra xem co goi dc api ko
    if (response !== undefined && response !== null) {
      if (response.status === 1) {
        //thanh cong sẽ put về
        yield put({type: GET_COUNT_COMMENT_SUCCESS, response});
      } else {
        //truong hợp này gọi tới sever bi sever báo lỗi về
        yield put({type: GET_COUNT_COMMENT_ERROR, error: response.error});
      }
    } else {
      //Đôi khi api lỗi , sever ko trả dữ liệu vè
      const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
      yield put({type: GET_COUNT_COMMENT_ERROR, error: message});
    }
  } catch (error) {
    const message = 'Có lỗi xảy ra, không thể kết nối tới sever';
    yield put({type: GET_COUNT_COMMENT_ERROR, error: message});
  }
}
