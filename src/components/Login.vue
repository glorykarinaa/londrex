<script lang="js">

import { store } from '../store'
export default{
  data(){
    return {
      loginForm: {},
      loginError: false,
      store
    }
  },
  methods: {
    doLogin(){
      this.axios.post("/authenticate",this.loginForm).then((response) => {
      // handle success
      // this.pangkalan_list = response.data.data;
      const token = response.data.data.token
      if(token.length > 0){
        localStorage.setItem('token', token)
        this.loginError = false
        this.$router.push('/dashboardadmin')
        this.store.token = token
      }else{
        this.loginError = true
      }
    });
    }
  }
}
</script>

<template>
  <div class="login-bg">
    <img class="login-banner" src="/logos.png" alt="" />
    <div class="login-wrapper">
      <div class="notification is-danger" v-show="loginError">username/password salah</div>
      <form action="">
        <div class="input-group">
          <label> Username</label>
          <input type="text" v-model="loginForm.username" name="username" placeholder="" />
        </div>
        <div class="input-group">
          <label>Password</label>
          <input type="password" v-model="loginForm.password" name="password" placeholder="" />
        </div>
        <div class="align-center action">
          <button class="button" @click.prevent="doLogin">Login</button>
          <p>Tidak memiliki akun? <router-link to="/Signup">Daftar sekarang</router-link></p>
          <p><router-link to="/ForgetPassword">Lupa Password?</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.login-bg {
  background-color: #e6d8d0;
  min-height: calc(100vh - 84px);
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
}
p {
  margin-bottom: 10px;
  margin-top: 10px;
}
.login-wrapper {
  background-color: #fff;
  box-shadow: 0 5px 15px #333;
  width: 500px;
  height: fit-content;
  padding: 50px 100px;
  margin: auto;
  margin-right: 100px;
  border-radius: 10px;
}
.action,
.action a {
  color: #6054e5;
  font-weight: 700;
  text-decoration: none;
}
.login-banner {
  width: 250px;
  height: fit-content;
  margin: auto;
}
</style>
