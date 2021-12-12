import { POST_SIGNUP ,SIGNUP_ERROR, SIGNUP_SUCCESS} from "../../actions/LoginAction";

const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const signupReducer = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhập
      case POST_SIGNUP:
        return {
          loadding: true, //dang loadding
          data: null, //ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case SIGNUP_SUCCESS:
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case SIGNUP_ERROR:
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
export default signupReducer;
