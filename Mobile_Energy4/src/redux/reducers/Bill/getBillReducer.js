import { GET_BILL, GET_BILL_ERROR,  GET_BILL_SUCCESS } from "@redux/actions/BillAction";


const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const getBillReducers = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhập
      case GET_BILL:
        return {
          loadding: true, //dang loadding
          data: null, //ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case GET_BILL_SUCCESS:
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case GET_BILL_ERROR:
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
export default getBillReducers;
