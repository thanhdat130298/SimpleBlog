<script lang="ts">
import type { IPost } from "@/types";
import store from "@/store";
import Item from "@/components/Item.vue";
import Loading from "@/components/commons/CLoading.vue";
import CHeading from "@/components/commons/CHeading.vue";
import CPagin from "@/components/commons/CPagin.vue";
export default {
  name: "ListPage",
  components: {
    Item,
    Loading,
    CHeading,
    CPagin,
  },
  data() {
    return {
      posts: [] as IPost[],
      store,
      totalPages: 0,
      total: 0,
      currentPage: 1,
    };
  },
  methods: {
    pagechanged(page: number | undefined) {
      this.currentPage = page || this.currentPage;
      this.fetchData();
    },
    async fetchData() {
      const res = await store.dispatch("getAllPost", {
        page: this.currentPage,
        offset: 7,
      });
      const { data, pagination } = res;
      this.posts = data.items;

      this.totalPages = pagination.total;
      this.currentPage = pagination.page;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<template>
  <CHeading title="Post" />
  <Loading v-if="store.state.isLoading" />
  <div class="list-unstyled" v-else>
    <Item
      v-for="(post, index) in posts"
      :key="index"
      :title="post.title"
      :content="post.content"
      :image="post.image.url"
      :postId="post.id"
    />
    <CPagin
      @pagechanged="pagechanged"
      :totalPages="totalPages"
      :total="total"
      :currentPage="currentPage"
    />
  </div>
</template>
