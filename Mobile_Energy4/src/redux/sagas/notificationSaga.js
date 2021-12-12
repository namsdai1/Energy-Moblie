import { GET_NOTIFICATION_BY_USER, GET_NOTIFICATION_BY_USER_ERROR, GET_NOTIFICATION_BY_USER_SUCCESS } from '@redux/actions/NotificationAction';
import { getNotificationByUserApi } from '@redux/api/notification';
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'

export function* watchGetNotificationByUser(){
    yield takeEvery(GET_NOTIFICATION_BY_USER,getNotificationByUserSaga)
}
function* getNotificationByUserSaga(action){
    const {data}=action;
    console.log('=========================>>>>>>>>>>>>>>>>>>> getNotificationByUserSaga:' + data)

    const response = yield getNotificationByUserApi(data);   
    
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_NOTIFICATION_BY_USER_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_NOTIFICATION_BY_USER_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_NOTIFICATION_BY_USER_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_NOTIFICATION_BY_USER_ERROR,error:message})
    }
}