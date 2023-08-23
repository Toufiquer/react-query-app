import axios from "axios";
export const setUpAxios = () => {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

  // Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
  // See below for an example using Custom instance defaults instead.
  axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
};
