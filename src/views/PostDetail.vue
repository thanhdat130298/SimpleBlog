<script lang="ts">
import type { IPost } from "@/types";
import store from "@/store";
import { datetime } from "@/utils/format";
export default {
  name: "PostDetail",
  data() {
    return {
      post: {} as IPost,
      datetime,
    };
  },
  async mounted() {
    const res = await store.dispatch("getById", this.$route.params.id);
    this.post = res;
  },
};
</script>
<template>
  <div class="blog-post">
    <h2 class="blog-post-title">
      {{ post.title }}
    </h2>
    <p class="blog-post-meta">
      {{ datetime(post.updated_at) }}
    </p>

    <img
      :src="post.image?.url"
      class="mr-3 img"
      :alt="post.title || 'image-thump'"
    />
    <p class="d-content">
      {{ post.content }}
    </p>
  </div>
  <!-- /.blog-post -->
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
