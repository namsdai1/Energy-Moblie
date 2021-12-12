import { ADD_BILL, ADD_BILL_ERROR, ADD_BILL_NULL, ADD_BILL_SUCCESS } from "@redux/actions/BillAction";


const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const addBillReducers = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhập
      case ADD_BILL:
        return {
          loadding: true, //dang loadding
          data: null, //ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case ADD_BILL_SUCCESS:
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case ADD_BILL_ERROR:
        return {
          loadding: false, //ngung loadding dc
          data: null, //ko có dữ liệu
          error: action.error, //khong lỗi
        };
      case ADD_BILL_NULL:
          return{
            loadding: false, //ko loadding dc
            data: null, //ko có dữ liệu
            error: null, //khong lỗi
          }  
      default:
        //trả về mặc định
        return state;
    }
};
export default addBillReducers;
