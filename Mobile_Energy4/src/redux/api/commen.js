import axios from 'axios';
import {api, useData} from 'config/config';

export async function getCommentsApi(input) {
  console.log(input);
  console.log('aaa');
  return axios
    .post(api + '/comment', input, {
      headers: {Authorization: `Bearer ${useData.token}`},
    })
    .then(response => {
      console.log('response catch => getCommentsApi => ' + response.data);
      console.log(response.data);
      return response.data;
    })
    .then(response => {
      return response;
    })
    .catch(function (error) {
      //Đăng nhập sai
      //Thep api nó sẽ trả về status 401 nên bay về hàm này
      //những không có giá trị trả về
      //nên tạo dữ liệu erro vào hàm này
      console.log();
      return {
        status: -1,
        error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
      };
    });
}

export async function addCommentsApi(input) {
  return axios
    .post(api + '/comment/add', input)
    .then(response => {
      console.log('response catch => addCommentsApi => ' + response.data);
      console.log(response.data);
      return response.data;
    })
    .then(response => {
      return response;
    })
    .catch(function (error) {
      //Đăng nhập sai
      //Thep api nó sẽ trả về status 401 nên bay về hàm này
      //những không có giá trị trả về
      //nên tạo dữ liệu erro vào hàm này
      console.log();
      return {
        status: -1,
        error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
      };
    });
}

export async function getCountCommentsApi(input) {
  return axios
    .get(api + '/comment/averaged/' + input)
    .then(response => {
      console.log('response catch => getCountCommentsApi => ' + response.data);
      console.log(response.data);
      return response.data;
    })
    .then(response => {
      return response;
    })
    .catch(function (error) {
      //Đăng nhập sai
      //Thep api nó sẽ trả về status 401 nên bay về hàm này
      //những không có giá trị trả về
      //nên tạo dữ liệu erro vào hàm này
      console.log();
      return {
        status: -1,
        error: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
      };
    });
}
