import axios from 'axios';

export async function postLogin(user, password) {
  return axios
    .post('http://10.0.2.2:3000/users/login', {
      email_user: user,
      pwd_user: password,
    })
    .then((response) => {
      console.log('response catch => getLoginApi => '+response.data);
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
        resultCode: -1,
        message: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
      };
    });
}

export async function postSignUp(user) {
  const {email_user,pwd_user,name_user}=user;
  console.log(email_user,pwd_user,name_user+'data')
  return axios
    .post('http://10.0.2.2:3000/users', {
      email_user: email_user,
      pwd_user: pwd_user,
      name_user:name_user
    })
    .then((response) => {
      console.log('response catch => getSignUpApi => '+response.data);
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
