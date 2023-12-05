import {
    API_URL,
    GET_DATA_ENDPOINT,
    SEND_DATA_ENDPOINT
  } from './auth.constants';
  
  import request from './api.request';
  
  class DataService {
    constructor() {
      this.getData = this.getData.bind(this);
      this.sendData = this.sendData.bind(this);
    }
  
    async getData(params) {

      try {
        const response = await request({
          url: API_URL + GET_DATA_ENDPOINT,
          method: 'GET',
          data: params.data,
          headers: params.headers
        });
  
        if (response) {
          return response;
        }
      } catch (error) {
        return error.response;
      }
    }

    async sendData(params) {

        try {
          const response = await request({
            url: API_URL + SEND_DATA_ENDPOINT,
            method: 'POST',
            data: params.data,
            headers: params.headers
          });
    
          if (response) {
            return response;
          }
        } catch (error) {
          return error.response;
        }
    }
  
    
  }
  
  export default new DataService();