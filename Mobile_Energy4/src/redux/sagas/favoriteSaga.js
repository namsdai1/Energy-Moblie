import {getFavoriteApi, getFavoriteByIdApi} from '../api/favorite';
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import { GET_FAVORITE, GET_FAVORITE_BY_ID, GET_FAVORITE_BY_ID_ERROR, GET_FAVORITE_BY_ID_SUCCESS, GET_FAVORITE_ERROR, GET_FAVORITE_SUCCESS } from '@redux/actions/FavoriteAction';

export function* watchGetFavorite(){
    yield takeEvery(GET_FAVORITE,getFavoriteSaga)
}
function* getFavoriteSaga(action){
   console.log('get favorite saga')
    const response = yield getFavoriteApi();   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_FAVORITE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_FAVORITE_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_FAVORITE_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_FAVORITE_ERROR,error:message})
    }
}

export function* watchGetFavoriteById(){
    yield takeEvery(GET_FAVORITE_BY_ID,getFavoriteByIdSaga)
}
function* getFavoriteByIdSaga(action){
   console.log('get favorite by id saga ')
    const response = yield getFavoriteByIdApi();   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_FAVORITE_BY_ID_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_FAVORITE_BY_ID_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_FAVORITE_BY_ID_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_FAVORITE_BY_ID_ERROR,error:message})
    }
}