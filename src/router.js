import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Users from "./views/Users";
import UsersPosts from "./views/UsersPosts";
import UsersProfile from "./views/UsersProfile";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: Home },
    {
      path: "/users/:id",
      component: Users,
      props: true,
      children: [
        { path: "profile", component: UsersProfile },
        { path: "posts", component: UsersPosts },
      ],
    },
  ],
});
