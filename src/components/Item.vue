<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  name: "ItemComponent",
  props: {
    postId: Number,
    title: String,
    content: String,
    image: String,
  },
  components: { RouterLink },
};
</script>

<template>
  <RouterLink :to="'/posts/' + postId" class="media">
    <img :src="image" class="mr-3 img" :alt="title || 'image-thump'" />
    <div class="media-body">
      <h5 class="mt-0 mb-1">{{ title }}</h5>
      <div class="d-ellipse-3">
        {{ content }}
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.media {
  height: 100px;
  color: var(--vt-c-white);
  text-decoration: none;
}
img {
  width: 100px;
  height: 100px;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
