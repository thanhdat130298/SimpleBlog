<script lang="ts">
import { RouterLink } from "vue-router";
import store from "@/store";
import MenuIcon from "@/components/icons/MenuIcon.vue";
export default {
  name: "DefaultLayout",
  components: { MenuIcon },
  setup() {
    return { RouterLink, store };
  },
};
</script>
<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark fixed-topd-flex justify-content-between"
  >
    <a class="navbar-brand" href="/">D-Blog</a>
    <div class="drawer-mb">
      <button
        class="btn btn-dark"
        data-toggle="collapse"
        href="#collapse"
        role="button"
        aria-expanded="false"
        aria-controls="collapse"
      >
        <MenuIcon />
      </button>
    </div>
  </nav>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-lg-2 d-fixed mb-5 collapse" id="collapse">
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
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  margin-top: 10px;
  overflow: hidden;
}
.collapse:not(.show) {
  display: block;
}
.d-active {
  background-color: black !important;
}
.drawer-mb {
  display: none;
}
@media (max-width: 768px) {
  .collapse:not(.show) {
    display: none;
  }
  .content {
    margin-top: 10px;
  }
  .drawer-mb {
    display: block;
  }
}
</style>
