import axios from "axios";

axios.defaults.baseURL = 'https://horizons-backend-41be3d431d55.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;