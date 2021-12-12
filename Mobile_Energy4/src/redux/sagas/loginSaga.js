
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import {postLogin, postSignUp} from '../api/login'
import { POST_SIGNIN, SIGNIN_ERROR, SIGNIN_SUCCESS,POST_SIGNUP, SIGNUP_ERROR, SIGNUP_SUCCESS, LOGOUT } from "../actions/LoginAction";
export function* watchLogin(){
    yield takeEvery(POST_SIGNIN,signInFlow)
}
function* signInFlow(action){
    const {user,password} = action.data;//lay use,pass từ trong acction ra
    const response = yield postLogin(user,password);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:SIGNIN_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:SIGNIN_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:SIGNIN_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:SIGNIN_ERROR,error:message})
    }
}

export function* watchSignUp(){
    yield takeEvery(POST_SIGNUP,signUpFlow)
}
function* signUpFlow(action){
    const user = action.data;//lay use,pass từ trong acction ra
    console.log(user)
    const response = yield postSignUp(user);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.status===1){
            //thanh cong sẽ put về
            yield put({type:SIGNUP_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:SIGNUP_ERROR,error:response.error})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:SIGNUP_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:SIGNUP_ERROR,error:message})
    }
}
