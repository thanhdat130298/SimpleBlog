<script lang="ts">
interface page {
  name: number;
  isDisabled: boolean;
}
export default {
  name: "HeadingComponent",
  components: {},
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page: number) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      if (this.currentPage < this.totalPages)
        this.$emit("pagechanged", this.currentPage + 1);
    },
    // onClickLastPage() {
    //   this.$emit("pagechanged", this.totalPages);
    // },
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }
      // When on the last page
      if (this.currentPage === this.totalPages) {
        return (
          this.totalPages -
          Math.min(this.maxVisibleButtons, this.totalPages) +
          1
        );
      }
      // When in between
      return this.currentPage - 1;
    },
    pages() {
      const range: page[] = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
  },
};
</script>
<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination d-flex justify-content-end" id="d-pagin">
      <li class="page-item" :class="isInFirstPage && 'disabled'">
        <a class="page-link" @click="onClickPreviousPage">Previous</a>
      </li>
      <li
        class="page-item"
        v-for="(page, index) in pages"
        :key="index"
        :class="page.isDisabled && 'active'"
        :disabled="page.isDisabled"
      >
        <a class="page-link" @click.prevent="onClickPage(page.name)">
          {{ page.name }}
        </a>
      </li>
      <li class="page-item" :class="isInLastPage && 'disabled'">
        <a class="page-link" @click="onClickNextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
#d-pagin .page-link {
  background-color: #343a40;
  color: white;
  border-color: white !important;
}
#d-pagin .active .page-link {
  background-color: #fff;
  color: black;
}
li {
  cursor: pointer;
}
.disabled {
  cursor: default;
}
</style>
