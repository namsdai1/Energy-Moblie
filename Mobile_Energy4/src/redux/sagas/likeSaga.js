
import {editLikeApi, getLikeByUserApi, removeLikeApi, statusLikeApi} from '../api/like';
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import { EDIT_LIKE,EDIT_LIKE_ERROR, EDIT_LIKE_SUCCESS, GET_LIKE_BY_USER, GET_LIKE_BY_USER_ERROR, GET_LIKE_BY_USER_SUCCESS, REMOVE_LIKE, REMOVE_LIKE_ERROR, REMOVE_LIKE_SUCCESS, STATUS_LIKE, STATUS_LIKE_ERROR, STATUS_LIKE_SUCCESS} from '@redux/actions/likeAction';

export function* watchEditLike(){
    yield takeLatest(EDIT_LIKE,editLikeSaga)
}
function* editLikeSaga(action){
    console.log('EDIT_LIKE saga' ) 
   const data = action;
   console.log('EDIT_LIKE saga' +data) 
    const response = yield editLikeApi(data);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:EDIT_LIKE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:EDIT_LIKE_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:EDIT_LIKE_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:EDIT_LIKE_ERROR,error:message})
    }
}
export function* watchStatusLike(){
    yield takeEvery(STATUS_LIKE,statusLikeSaga)
}
function* statusLikeSaga(action){
    console.log('STATUS_LIKE saga' ) 
   const data = action;
   console.log('STATUS_LIKE saga' +data) 
    const response = yield statusLikeApi(data);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:STATUS_LIKE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:STATUS_LIKE_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:STATUS_LIKE_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:STATUS_LIKE_ERROR,error:message})
    }
}

export function* watchRemoveLike(){
    yield takeLatest(REMOVE_LIKE,removeLikeSaga)
}
function* removeLikeSaga(action){
    console.log('REMOVE_LIKE saga' ) 
   const data = action;
   console.log('REMOVE_LIKE saga' +data) 
    const response = yield removeLikeApi(data);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:REMOVE_LIKE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:REMOVE_LIKE_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:REMOVE_LIKE_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:REMOVE_LIKE_ERROR,error:message})
    }
}

export function* watchGetLikeByUser(){
    yield takeEvery(GET_LIKE_BY_USER,getLikeByUserSaga)
}
function* getLikeByUserSaga(action){
    const {data}=action;
    console.log('--------------------->>>>>>>>>>>>>>>>>>> getLikeByUserSaga:' + data)

    const response = yield getLikeByUserApi(data);   
    
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_LIKE_BY_USER_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_LIKE_BY_USER_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_LIKE_BY_USER_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_LIKE_BY_USER_ERROR,error:message})
    }
}