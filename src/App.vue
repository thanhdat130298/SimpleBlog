<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
const layout: any = ref("default-layout");
const route = useRoute();
watch(
  () => route.meta?.layout,
  async (metaLayout) => {
    try {
      layout.value = metaLayout;
    } catch (e) {
      layout.value = "default-layout";
    }
  }
);
</script>

<template>
  <component :is="layout"><RouterView /></component>
</template>

<style scoped></style>
