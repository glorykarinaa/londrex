<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Navigation from "./components/Navigation.vue";
import NavigationAdmin from "./components/NavigationAdmin.vue";
import { store } from "./store";
export default {
  components: {
    Navigation,
    NavigationAdmin,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    isLoggedIn() {
      console.log(this.store.token);
      return this.store.token ? this.store.token.length > 0 : false;
    },
  },
};
</script>
<template>
  <Navigation v-if="!isLoggedIn"></Navigation>
  <NavigationAdmin v-else></NavigationAdmin>
  <router-view></router-view>
</template>
