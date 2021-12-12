import { } from '@redux/actions/UserAction';
import {getCartByUserApi, updateCartByCartApi} from '../api/cart';
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import { GET_CART, GET_CART_ERROR, GET_CART_SUCCESS, UPDATE_CART, UPDATE_CART_ERROR, UPDATE_CART_SUCCESS } from '@redux/actions/CartAction';

export function* watchGetCartbyUser(){
    yield takeEvery(GET_CART,getCartByUserSaga)
}
function* getCartByUserSaga(action){
 //   console.log('runid'+id)
    const {data}=action;
    console.log('runid'+data)
    const response = yield getCartByUserApi(data);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_CART_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_CART_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_CART_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_CART_ERROR,error:message})
    }
}

export function* watchUpdateCartbyCart(){
    yield takeEvery(UPDATE_CART,updateCartByCartSaga)
}
function* updateCartByCartSaga(action){
 //   console.log('runid'+id)
    const {data}=action;
    console.log('runid'+data)
    const response = yield updateCartByCartApi(data);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:UPDATE_CART_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:UPDATE_CART_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:UPDATE_CART_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:UPDATE_CART_ERROR,error:message})
    }
}
