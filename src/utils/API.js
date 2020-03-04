import axios from "axios";
const BASEURL = 'https://jsonplaceholder.typicode.com/users';

export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};