import {GET_STORE_BY_ID,GET_STORE_BY_ID_SUCCESS,GET_STORE_BY_ID_ERROR} from '../../actions/StoreAction'
const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const getStoreByIdReducer = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhập
      case GET_STORE_BY_ID:
        return {
          loadding: true,//dang loadding
          data: null,//ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case GET_STORE_BY_ID_SUCCESS:
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case GET_STORE_BY_ID_ERROR:
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
export default getStoreByIdReducer;
