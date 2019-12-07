import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Movie from "../views/Movie";
import Theater from "../views/Theater";
import Profile from "../views/Profile";
import Hot from "../views/Hot";
import ComingSoon from "../views/ComingSoon";
Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:"/home" //重定向
  },
  {
    path: "/home",
    name: "home",
    redirect:"/home/movie",
    component: Home,
    children:[
      {
        path:"movie",
        name:"movie",
        redirect:"/home/movie/hot",
        component:Movie,
        children:[
          {
            path:"hot",
            name:"hot",
            component:Hot
          },
          {
            path:"comingSoon",
            name:"comingSoon",
            component:ComingSoon
          },
        ]
      },
      {
        path:"theater",
        name:"theater",
        component:Theater
      },
      {
        path:"profile",
        name:"profile",
        component:Profile
      },
    ]
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
