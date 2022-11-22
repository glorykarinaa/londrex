<script>
export default {
  data() {
    return {
      orderForm: {
        cust_id: "112",
        package_id: "211",
        status_order: "On Process",
        tanggal_masuk: "20-11-2022",
        tanggal_selesai: "22-11-2022",
        price_packages:"100000",
      },
    };
  },
  methods: {
    doSave() {
      this.axios.post("/order", this.orderForm).then((response) => {});
    },
  },
};
</script>

<template>
  <div class="form-action">
    <p>Data Order</p>
    <button @click="doSave" class="button">Simpan</button>
  </div>
  <div class="login-wrapper">
    <form action="">
      <div class="input-group">
        <label>Customer ID</label>
        <input type="text" name="cust_id" placeholder="" v-model="orderForm.cust_id" />
      </div>
      <div class="input-group">
        <label>Package ID</label>
        <input type="text" name="package_id" placeholder="" v-model="orderForm.package_id" />
      </div>
      <div class="input-group">
        <label>Status Order</label>
        <input type="text" name="status_order" placeholder="" v-model="orderForm.status_order" />
      </div>
      <div class="input-group">
        <label>Tanggal Masuk</label>
        <input type="text" name="tanggal_masuk" placeholder="" v-model="orderForm.tanggal_masuk" />
      </div>
      <div class="input-group">
        <label>Status Order</label>
        <input type="text" name="tanggal_selesai" placeholder="" v-model="orderForm.tanggal_selesai" />
      </div>
      <div class="input-group">
        <label>Status Order</label>
        <input type="text" name="price_packages" placeholder="" v-model="orderForm.price_packages" />
      </div>
      <div class="align-center"></div>
    </form>
  </div>
</template>

<style scoped>
.button {
  background-color: #e3e3e7;
  color: #fff;
}

.login-wrapper {
  background-color: #fff;
  width: 97%;
  margin-right: auto;
  box-shadow: 0 0 10px #ddd;
  margin-bottom: 30px;
}
.login-wrapper form {
  max-width: 500px;
}
.form-action {
  text-align: left;
  display: flex;
  padding: 10px 15px;
}
.form-action button {
  margin-left: auto;
}
</style>
