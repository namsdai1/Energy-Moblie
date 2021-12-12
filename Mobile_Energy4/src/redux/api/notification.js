import axios from 'axios';
import { api, useData } from 'config/config';

export async function getNotificationByUserApi(id) {
    console.log('---------------->>>>>>>>>>>>>> getNotificationByUserApi: '+id)
    console.log('=================================================================')
    return axios
      .get(api+'/notification/'+id,{
        headers: { 'Authorization': `Bearer ${useData.token}` },
      })
      .then((response) => {
        console.log('response catch ===========> getNotificationByUserApi => '+response.data);
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