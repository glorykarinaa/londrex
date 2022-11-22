<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    doLogout() {
      // console.log(this.store);
      this.store.token = "";
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="navbar">
    <nav class="navigation">
      <router-link class="nav-item" to="/Pangkalan">Pangkalan</router-link>
      <router-link class="nav-item" to="/order">Order saya</router-link>
    </nav>
    <nav class="navigation right">
      <a class="nav-item" @click="doLogout">Logout</a>
    </nav>
  </div>
</template>

<style scoped>
.navigation {
  margin-left: 0px;
}
.navigation.right {
  margin-left: auto;
}
</style>
