import { UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from "@redux/actions/UserAction";


const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const updateUserReducer = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhập
      case UPDATE_USER:
        console.log('runreducer')
        return {
          loadding: true, //dang loadding
          data: null, //ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case UPDATE_USER_SUCCESS:
        console.log('runreducer')
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case UPDATE_USER_ERROR:
        return {
          loadding: false, //ngung loadding dc
          data: null, //ko có dữ liệu
          error: action.error, //khong lỗi
        };
      default:
        //trả về mặc định
        return state;
    }
};
export default updateUserReducer;
