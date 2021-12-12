import axios from 'axios';
import { api, useData } from 'config/config';

export async function getCartByUserApi(iduser) {
    console.log(iduser)
    return axios
      .get(api+'/cart/'+iduser,{
        headers: { 'Authorization': `Bearer ${useData.token}` },
      })
      .then((response) => {
        console.log('response catch => getProductApi => '+response.data);
        console.log(response.data);
        return response.data;
      })
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        //Đăng nhập sai
        //Thep api nó sẽ trả về status 401 nên bay về hàm này
        //những không có giá trị trả về
        //nên tạo dữ liệu erro vào hàm này
        console.log()
        return {
          status: -1,
          error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
        };
      });
  }
  export async function updateCartByCartApi(data) {
    const {idcart,id_product,total}=data;
    return axios
      .post(api+'/cart/edit-cart/'+idcart,{
        products:id_product,
        total:total
      },{
        headers: { 'Authorization': `Bearer ${useData.token}` },
      })
      .then((response) => {
        console.log('response catch => getProductApi => '+response.data);
        console.log(response.data);
        return response.data;
      })
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        //Đăng nhập sai
        //Thep api nó sẽ trả về status 401 nên bay về hàm này
        //những không có giá trị trả về
        //nên tạo dữ liệu erro vào hàm này
        console.log()
        return {
          status: -1,
          error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
        };
      });
  }