import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Page from "../views/Page.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/page/:id',
    name: 'Page',
    component: Page,
    props: true,
    meta: {
      requiresAuth: false
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    console.log('not logged in');
    next('/')
  }
  else if (to.path === '/' && loggedIn)
    next('/main')
  else next()
})

export default router;
