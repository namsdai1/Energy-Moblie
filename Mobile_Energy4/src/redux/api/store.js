import axios from 'axios';
import { api } from 'config/config';


export async function getStoreApi() {
  console.log('api'+api+'/store')
    return axios
      .get(api+'/store')
      .then((response) => {
        console.log('response catch => getStoreApi => '+response.data);
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

  export async function getStoreByIdApi(id) {
    console.log(id+'api')
      return axios
        .get(api+'/store/'+id)
        .then((response) => {
          console.log('response catch => getStoreByIDApi => '+response.data);
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

