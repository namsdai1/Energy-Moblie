import axios from 'axios';
import { api } from 'config/config';


export async function getFavoriteApi() {
  console.log('api: '+api+'/product/like')
    return axios
      .get(api+'/product/like')
      .then((response) => {
        console.log('response catch => getFavoriteApi => '+response.data);
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

  export async function getFavoriteByIdApi(id) {
    console.log(id+'get favorite by id api')
      return axios
        .get(api+'/product/like'+id)
        .then((response) => {
          console.log('response catch => getFavoriteByIDApi => '+response.data);
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
      
          return {
            status: -1,
            error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
          };
        });
    }  

