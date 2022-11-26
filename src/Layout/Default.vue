<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  name: "DefaultLayout",
  setup() {
    return { RouterLink };
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="/">D-Blog</a>
  </nav>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-lg-2 d-fixed">
          <div class="nav-item">
            <RouterLink
              class="list-group-item list-group-item-action bg-dark text-white"
              :class="$route.name == 'dashboard' ? 'd-active' : ''"
              to="/"
            >
              Dashboard
            </RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink
              class="list-group-item list-group-item-action bg-dark text-white"
              :class="$route.name == 'posts' ? 'd-active' : ''"
              to="/posts"
            >
              List
            </RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink
              class="list-group-item list-group-item-action bg-dark text-white"
              :class="$route.name == 'manage' ? 'd-active' : ''"
              to="/manage"
            >
              Manage
            </RouterLink>
          </div>
        </div>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  margin-top: 80px;
  overflow: hidden;
}
.d-active {
  background-color: black !important;
}
</style>
