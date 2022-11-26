<script lang="ts">
import type { IPost } from "@/types";
import store from "@/store";
import Item from "@/components/Item.vue";
export default {
  name: "ListPage",
  components: {
    Item,
  },
  data() {
    return {
      posts: [] as IPost[],
      store,
    };
  },
  async mounted() {
    console.log(store);
    const res = await store.dispatch("getAllPost");
    this.posts = res;
  },
};
</script>
<template>
  <div
    v-if="store.state.isLoading"
    class="d-flex justify-content-center d-loading"
  >
    <div class="spinner-border text-light" role="status"></div>
  </div>
  <div class="list-unstyled">
    <Item
      v-for="(post, index) in posts"
      :key="index"
      :title="post.title"
      :content="post.content"
      :image="post.image.url"
      :postId="post.id"
    />
  </div>
</template>
