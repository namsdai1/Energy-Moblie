import axios from 'axios';
import { api, useData } from 'config/config';

export async function editLikeApi(input) {
  const {data} = input;
    console.log(data)
    console.log('api like/////////////////')
    return axios
      .post(api+'/like/liker',data,{
        headers: { 'Authorization': `Bearer ${useData.token}` },
      })
      .then((response) => {
        console.log('response catch => EditLikeApi => '+response.data);
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

  export async function statusLikeApi(input) {
    const {data} = input;
      console.log(data)
      console.log('api like/////////////////')
      return axios
        .post(api+'/like/status',data,{
          headers: { 'Authorization': `Bearer ${useData.token}` },
        })
        .then((response) => {
          console.log('response catch => StatusLikeApi => '+response.data);
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
    export async function removeLikeApi(input) {
      const {data} = input;
        console.log(data)
        console.log('api like/////////////////'+useData.token)
        return axios
          .get(api+'/like/removeLike/'+data,{
            headers: { 'Authorization': `Bearer ${useData.token}` },
          })
          .then((response) => {
            console.log('response catch => RemoveLikeApi => '+response.data);
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

      export async function getLikeByUserApi(id) {
        console.log('---------------->>>>>>>>>>>>>> getLikeByUserApi: '+id)
        console.log('----------------------------------------------------')
        return axios
          .get(api+'/like/'+id,{
            headers: { 'Authorization': `Bearer ${useData.token}` },
          })
          .then((response) => {
            console.log('response catch ===========> getLikeByUserApi => '+response.data);
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