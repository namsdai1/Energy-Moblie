import {GET_COMMENT,GET_COMMENT_SUCCESS,GET_COMMENT_ERROR} from '../../actions/CommentAction'
const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const getCommentsReducer = (state = initialStale, action) => {
    switch (action.type) {
      //đang đăng nhập
      case GET_COMMENT:
        return {
          loadding: true,//dang loadding
          data: null,//ko có dữ liệu
          error: null, //khong lỗi
        };
      //đăng nhập thành công
      case GET_COMMENT_SUCCESS:
        console.log('action.response'+action.response)
        return {
          loadding: false, //ngừng loadding dc
          data: action.response, //co du lieu
          error: null, //khong lỗi
        };
      //đăng nhập thất bại
      case GET_COMMENT_ERROR:
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
export default getCommentsReducer;
