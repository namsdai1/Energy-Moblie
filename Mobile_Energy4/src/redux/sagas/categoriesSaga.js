
import {editLikeApi, getLikeByUserApi, removeLikeApi, statusLikeApi} from '../api/like';
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'

import { getCategoriesApi } from '@redux/api/category';
import { GET_CATEGORY, GET_CATEGORY_ERROR, GET_CATEGORY_SUCCESS } from '@redux/actions/CategoriesAction';

export function* watchGetCategory(){
    yield takeLatest(GET_CATEGORY,getCategorySaga)
}
function* getCategorySaga(action){
    console.log('GET_CATEGORY saga' ) 
   const {data} = action;
   console.log('GET_CATEGORY saga' +data) 
    const response = yield getCategoriesApi(data);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:GET_CATEGORY_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_CATEGORY_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_CATEGORY_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_CATEGORY_ERROR,error:message})
    }
}



