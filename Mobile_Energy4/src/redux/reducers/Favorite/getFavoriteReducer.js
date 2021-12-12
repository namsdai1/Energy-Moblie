import {
  GET_FAVORITE,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_ERROR,
} from '../../actions/FavoriteAction';
const initialStale = {
  loadding: false, //ko loadding dc
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const getFavoriteReducer = (state = initialStale, action) => {
  switch (action.type) {
    //đang đăng nhập

    case GET_FAVORITE:
      return {
        loadding: true, //dang loadding
        data: null, //ko có dữ liệu
        error: null, //khong lỗi
      };
    //đăng nhập thành công
    case GET_FAVORITE_SUCCESS:
      console.log('xxxxxxxxxxxxxx: GET_FAVORITE_SUCCESS');
      return {
        loadding: false, //ngừng loadding dc
        data: action.response, //co du lieu
        error: null, //khong lỗi
      };
    //đăng nhập thất bại
    case GET_FAVORITE_ERROR:
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
export default getFavoriteReducer;
