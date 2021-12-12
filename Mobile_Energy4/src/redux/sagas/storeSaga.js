import {getStoreApi, getStoreByIdApi} from '../api/store';
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import { GET_STORE, GET_STORE_BY_ID, GET_STORE_BY_ID_ERROR, GET_STORE_BY_ID_SUCCESS, GET_STORE_ERROR, GET_STORE_SUCCESS } from '@redux/actions/StoreAction';

export function* watchGetStore(){
    yield takeEvery(GET_STORE,getStoreSaga)
}
function* getStoreSaga(action){
   console.log('runid')
    const response = yield getStoreApi();   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_STORE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_STORE_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_STORE_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_STORE_ERROR,error:message})
    }
}

export function* watchGetStoreById(){
    yield takeEvery(GET_STORE_BY_ID,getStoreByIdSaga)
}
function* getStoreByIdSaga(action){
   console.log('runid')
   const {data} = action;
    const response = yield getStoreByIdApi(data.idlocal);   
    console.log(response)
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_STORE_BY_ID_SUCCESS,response:{name:data.name,phone:data.phone,...response}})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_STORE_BY_ID_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_STORE_BY_ID_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_STORE_BY_ID_ERROR,error:message})
    }
}
