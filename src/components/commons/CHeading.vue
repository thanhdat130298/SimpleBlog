<script lang="ts">
import BackIcon from "../icons/BackIcon.vue";
export default {
  name: "HeadingComponent",
  props: {
    to: String,
    title: String,
    action: Function,
  },
  components: {
    BackIcon,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div
    class="card bg-dark mb-4 flex-row d-flex justify-content-between align-items-center"
  >
    <div class="card-body d-flex align-items-center">
      <RouterLink
        v-if="to"
        :to="to || '/'"
        type="button"
        class="btn btn-sm btn-secondary"
        ><BackIcon />
      </RouterLink>
      <div class="title">{{ title }}</div>
    </div>
    <div class="mr-3"><slot /></div>
  </div>
</template>
<style scoped>
.card {
  min-height: 54px;
  object-fit: cover;
}
.card-body {
  padding: 10px;
}
.title {
  font-size: 24px;
  margin-left: 20px;
}
</style>
