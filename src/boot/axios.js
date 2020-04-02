import Vue from "vue";
import axios from "axios";

export default ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: "http://localhost:3000/"
    //   withCredentials: true
    // timeout: 1000,
    // headers: {
    //   'header': 'value'
    // }
  });
};
