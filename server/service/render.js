const axios = require("axios");
const Base_url = "https://jsonplaceholder.typicode.com/comments?postId=1";

exports.addUser = (req, res) => {
  axios
    .get(`${Base_url}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  return res.data;
};
