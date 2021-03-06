import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import PrivateRoom from "../views/PrivateRoom.vue";
import TestChess from "../views/TestChess.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/room",
    name: "PrivateRoom",
    component: PrivateRoom,
  },
  {
    path: "/room/:groupId",
    name: "PrivateRoomInstance",
    component: PrivateRoom,
    props: true,
  },
  {
    path: "/testchess",
    name: "TestChess",
    component: TestChess,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
