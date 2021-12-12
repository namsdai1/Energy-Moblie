import axios from 'axios';
import { api, useData } from 'config/config';

export async function addBillApi(input) {
    
    return axios
      .post(api+'/bill',input,{
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

  
export async function getBillApi(input) {
    
  return axios
    .post(api+'/bill/billdetails',{id_user:input},{
      headers: { 'Authorization': `Bearer ${useData.token}` },
    })
    .then((response) => {
      console.log('response catch => getBillApi => '+response.data);
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

export async function getBillByIdApi(id) {
        //console.log ra cho nay
    console.log('Bill Api Action'+id)  
    return axios
    .post(api+'/bill/billdetails/'+id,{
      headers: { 'Authorization': `Bearer ${useData.token}` },
    })
    .then((response) => {
      console.log('response catch => getBillByIdApi => '+response.data);
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

export async function getBillDetailByIdApi(id) {
  console.log(id +'kkkkkkkkkkkkkkkkkkk')
  return axios
    .get(api+'/bill/billdetails/'+id,{
      headers: { 'Authorization': `Bearer ${useData.token}` },
    })
    .then((response) => {
      console.log('response catch ===========> getBillDetailByIdApi => '+response.data);
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