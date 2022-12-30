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
        pageNo: this.currentPage,
        rowSize: 10,
      });
      const { items, total, pageNo } = res;
      this.posts = items;
      this.totalPages = total % 10 == 0 ? total / 10 : total / 10 + 1;
      this.currentPage = pageNo;
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
      v-for="post in posts"
      :key="post.postId"
      :title="post.name"
      :content="post.content"
      :image="post.name"
      :postId="post.postId"
    />
    <CPagin
      @pagechanged="pagechanged"
      :totalPages="totalPages"
      :currentPage="currentPage"
    />
  </div>
</template>
