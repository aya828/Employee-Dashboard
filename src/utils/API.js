import axios from "axios";
const BASEURL = 'https://jsonplaceholder.typicode.com/users';
// const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};