import {
    LOGIN_ENDPOINT,
    REFRESH_ENDPOINT,
    REGISTER_ENDPOINT,
    API_URL
  } from './auth.constants';
  
  import request from './api.request';
  
  class AuthService {
    constructor() {
      this.login = this.login.bind(this);
    }
  
    async login(username, password) {
      const data = {username:username, password:password};
      try {
        const response = await request({
          url: API_URL + LOGIN_ENDPOINT,
          method: 'POST',
          data:{
            "username": username,
            "password": password
          }
        });
  
        if (response.data.access_token) {
          return this.setToken(response);
        }
      } catch (error) {
        return error.response;
      }
    }
  
    logout() {
      localStorage.removeItem('user');
    }
  
    async register({
      username,
      email,
      password,
    }) {
      try {
        let req = await request({
          url: API_URL + REGISTER_ENDPOINT,
          method: 'POST',
          data:{
            "username": username,
            "password": password,
            "email": email
          }
        });
        return req;
      } catch (error) {
        return error.response;
      }
    }
  
    setToken(response) {
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    }
  
    async refreshToken() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
  
        if (user.refresh) {
          const response = await request({
            url: REFRESH_ENDPOINT,
            method: 'POST',
            data: {
              refresh: user.refresh,
            },
          });
  
          return response.data;
        }
      } catch (error) {
        return error.response;
      }
    }
  }
  const authService = new AuthService();
  export default new AuthService();