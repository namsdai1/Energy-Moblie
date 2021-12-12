import axios from 'axios';
import { api, useData } from 'config/config';
export async function getUserByID(id) {
    console.log(id,api,useData.token)
    return axios
      .get(api+'/users/'+id,{
        headers: { 'Authorization': `Bearer ${useData.token}` },
      })
      .then((response) => {
        console.log('response catch => getUserApi => '+response.data);
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
  export async function EditUserByID(data) {
    return axios
      .post(api+'/users/edit-user/'+useData.id,data,{
        headers: { 'Authorization': `Bearer ${useData.token}` },
      })
      .then((response) => {
        console.log('response catch => getUserApi => '+response.data);
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