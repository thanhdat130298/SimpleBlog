<script lang="ts">
import type { IPost } from "@/types";
import store from "@/store";
import Loading from "@/components/commons/CLoading.vue";
import Heading from "@/components/commons/CHeading.vue";
import { datetime } from "@/utils/format";
export default {
  name: "PostDetail",
  components: {
    Loading,
    Heading,
  },
  data() {
    return {
      post: {} as IPost,
      datetime,
      store,
    };
  },
  created() {},
  async mounted() {
    const res = await store.dispatch("getById", this.$route.params.id);
    this.post = res;
  },
};
</script>
<template>
  <Heading to="/posts" title="Post detail" />
  <Loading v-if="store.state.isLoading" />
  <div class="blog-post" v-else>
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
    <p class="d-content" v-html="post.content"></p>
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
