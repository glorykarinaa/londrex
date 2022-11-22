import { createRouter, createWebHistory } from "vue-router";
import Homepage from "/src/components/Homepage.vue";
import Login from "/src/components/Login.vue";
import Signup from "/src/components/Signup.vue";
import ForgetPassword from "/src/components/ForgetPassword.vue";
import DashboardAdmin from "/src/components/DashboardAdmin.vue";
import OrderTambah from "/src/components/Orders_Create.vue";




const routes = [
  { path: "/", component: Homepage, name: "Home" },
  { path: "/login", component: Login, name: "login" },
  { path: "/Signup", component: Signup, name: "Signup" },
  { path: "/ForgetPassword", component: ForgetPassword, name: "ForgetPassword" },
  { path: "/dashboardadmin", component: DashboardAdmin, name: "DashboardAdmin" },
  { path: "/order-tambah", component: OrderTambah, name: "Orders_Create" },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
