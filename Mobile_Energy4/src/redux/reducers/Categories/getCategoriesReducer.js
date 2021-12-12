import { GET_CATEGORY, GET_CATEGORY_ERROR, GET_CATEGORY_SUCCESS } from "@redux/actions/CategoriesAction";

const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const getCategoriesReducer = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhập
      case GET_CATEGORY:
        return {
          loadding: true,//dang loadding
          data: null,//ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case GET_CATEGORY_SUCCESS:
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case GET_CATEGORY_ERROR:
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
export default getCategoriesReducer;
