import Axios from "axios";

const URL = "http://192.168.100.171:5000";

export const apiRequests = {
  REGISTER_USER: async userData => {
    try {
      let response = await Axios.post(`${URL}/signup`, userData);
      return response;
    } catch (error) {
      return error;
    }
  },

  LOGIN_USER: async userData => {
    try {
      let response = await Axios.post(`${URL}/login`, userData);
      return response;
    } catch (error) {
      return error;
    }
  },

  ADD_CATEGORY: async categoryData => {
    try {
      let response = await Axios.post(`${URL}/categories`, categoryData);
      return response;
    } catch (error) {
      return error;
    }
  },

  ADD_POST: async postData => {
    try {
      let response = await Axios.post(`${URL}/posts`, postData);
      return response;
    } catch (error) {
      return error;
    }
  },

  GET_USER_BY_ID: async userId => {
    try {
      let response = await Axios.get(`${URL}/users/${userId}`, userId);
      return response;
    } catch (error) {
      return error;
    }
  },

  UPDATE_POST_BY_ID: async postData => {
    try {
      let response = await Axios.put(`${URL}/posts/${postData._id}`, postData);
      return response;
    } catch (error) {
      return error;
    }
  },

  FETCH_ALL_POSTS: async () => {
    try {
      let response = await Axios.get(`${URL}/posts`);
      return response;
    } catch (error) {
      return error;
    }
  }
};
