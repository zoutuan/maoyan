const axios = require('axios');

const http = axios.create();
//拦截器
axios.interceptors.request.use(
    function (config) {
        //对查询字符串的值进行url百分号编码
      const params = config.params;
      if(typeof params === 'object' && params !== null){
          for(let key in params){
              let value = params[key];
              params[key] = encodeURI(value)
          }
      }
      config.params = params;
      return config;
  }, function (error) {
      return Promise.reject(error);
  });

const get = function(url,config){
    return http.get(url,config).then((response)=>{
        //能够返回data,status,statusText等数据
        const {data,status,statusText} = response;
        if(status === 200 || status === 304){
            return data
        }
        throw new Error(statusText);
    });
};
//电影初始化请求，首页数据
export const getInitMovies = function(){
  // return get("/ajax/movieOnInfoList");
    return get('/mock/initMovie.json');
}
//请求电影列表下一页数据
export const getMoreMovies = function(movieIds){
  // return get("/ajax/moreComingList", {
    return get('/mock/moreMovie.json',{
        params:{
            token:'',//token是必须的
            movieIds:movieIds.join(", ")
        }
    })
}