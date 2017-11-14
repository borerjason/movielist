const axios = require('axios');

let API_KEY = "83c70751336d954f34baaf71f5bfd1f7";

module.exports = (callback) => {
  return axios.get("https://api.themoviedb.org/3/movie/now_playing", {
    params: { 
      api_key: API_KEY
    }
  })
}
  