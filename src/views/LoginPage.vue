<script setup lang="ts">
import store from "@/store";
import { ref } from "vue";

const username = ref<string>("");
const password = ref<string>("");
const onLogin = async (e: any) => {
  e.preventDefault();

  const res = await store.dispatch("login", {
    username: username.value,
    password: password.value,
  });
  console.log(res);
};
</script>
<template>
  <form action="">
    <label for="username">Username</label>
    <input type="text" id="username" v-model="username" />
    <label for="password">Password</label>
    <input type="text" id="password" v-model="password" />
    <button @click="onLogin">Login</button>
  </form>
</template>
<style scoped>
.img {
  max-width: 300px;
  object-fit: cover;
}
.d-content {
  overflow-wrap: anywhere;
}
</style>
