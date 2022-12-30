<script lang="ts">
import { deletePost } from "@/apis/post";
import { RouterLink } from "vue-router";
import store from "@/store";

export default {
  name: "ItemComponent",
  props: {
    postId: Number,
    title: String,
    content: String,
    image: String,
    isManage: Boolean,
  },
  data() {
    return {
      store,
    };
  },
  components: { RouterLink },
  methods: {
    async onDelete() {
      await store.dispatch("deletePost", this.postId);
      this.$emit("delete");
    },
    onEdit() {
      alert("Comming soon!");
    },
  },
};
</script>

<template>
  <div class="d-flex justify-content-between">
    <RouterLink :to="'/posts/' + postId" class="media">
      <img :src="image" class="mr-3 img" :alt="title || 'image-thump'" />
      <div class="media-body">
        <h5 class="mt-0 mb-1">{{ title }}</h5>
        <div class="d-ellipse-3">
          {{ content }}
        </div>
      </div>
    </RouterLink>
    <div class="d-flex flex-column ml-4">
      <button
        type="button"
        class="btn btn-danger btn-sm mb-1"
        @click="onDelete"
      >
        <!-- <AddIcon class="mr-2" /> -->
        Delete
      </button>
      <button type="button" class="btn btn-warning btn-sm" @click="onEdit">
        <!-- <AddIcon class="mr-2" /> -->
        Edit
      </button>
    </div>
  </div>
</template>

<style scoped>
.media {
  text-decoration: none;
  height: 100px;
  color: var(--vt-c-white);
  margin-bottom: 5px;
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
