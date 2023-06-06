<script lang="ts">
import type { IPost, IPosts } from "@/types";
import store from "@/store";
import Item from "@/components/Item.vue";
import Loading from "@/components/commons/CLoading.vue";
import CHeading from "@/components/commons/CHeading.vue";
import CModal from "@/components/commons/CModal.vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import { newPost } from "@/apis/post";
import CPagin from "@/components/commons/CPagin.vue";
export default {
  name: "ManagePage",
  components: {
    Item,
    Loading,
    CHeading,
    CModal,
    AddIcon,
    CPagin,
  },
  data() {
    return {
      posts: [] as IPost[],
      isModalVisible: false,
      isSubmit: false,
      store,
      title: "",
      content: "",
      image: "" as any,
      imgName: "",
      totalPages: 0,
      total: 0,
      currentPage: 1,
    };
  },
  methods: {
    onAdd() {
      this.isModalVisible = true;
    },
    onChangeFile() {
      const file: any = this.$refs.file;
      this.image = file.files[0];
      this.imgName = this.image.name;
    },
    async onSubmit() {
      const ref: any = this.$refs?.formAdd;
      if (ref.checkValidity()) {
        const params: IPosts = {
          title: this.title,
          content: this.content,
          image: this.image,
        };
        this.closeModal();
        const res = await newPost(params);
        if (res) {
          this.fetchData();
          ref.classList.remove("was-validated");
          this.imgName = "Choose Image...";
          this.title = "";
          this.content = "";
          ref.reset();
          alert("Add success!");
        } else alert("Add fail!");
      } else {
        ref.classList.add("was-validated");
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    pagechanged(page: number | undefined) {
      this.currentPage = page || this.currentPage;
      this.fetchData();
    },
    async fetchData() {
      const res = await store.dispatch("getAllPost", {
        page: this.currentPage,
        offset: 7,
      });
      const { items, pageNo, total } = res;
      console.log(res)
      this.posts = items;

      this.totalPages = total;
      this.currentPage = pageNo;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<template>
  <CHeading title="Post Management">
    <button
      type="button"
      class="btn btn-secondary"
      data-toggle="modal"
      data-target="#modal"
      @click="onAdd"
    >
      <AddIcon class="mr-2" />
      Add post
    </button></CHeading
  >
  <CModal :isModalVisible="isModalVisible" @close="closeModal" title="Add post">
    <form ref="formAdd">
      <div class="form-group">
        <label for="add-title">Title</label>
        <input
          type="text"
          class="form-control"
          required
          v-model="title"
          id="add-title"
          placeholder="Type post title..."
        />
        <div class="invalid-feedback">Title is required!</div>
      </div>
      <div class="form-group">
        <label for="add-content">Content</label>
        <textarea
          v-model="content"
          class="form-control"
          id="add-content"
          placeholder="Type your content..."
          required
        ></textarea>
        <div class="invalid-feedback">Content is required!</div>
      </div>
      <div class="input-group mb-3">
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="add-image"
            ref="file"
            @change="onChangeFile"
            required
            accept="image/jpeg, image/jpg,
          image/png, image/gif, image/bmp"
          />
          <label class="custom-file-label" for="add-image">{{ imgName }}</label>
          <div class="invalid-feedback">Image is required!</div>
        </div>
      </div>
    </form>
    <template v-slot:footer>
      <button
        class="btn btn-success"
        :data-dismiss="!isModalVisible && 'modal'"
        @click="onSubmit"
      >
        Submit
      </button></template
    ></CModal
  >
  <Loading v-if="store.state.isLoading" />
  <div class="list-unstyled" v-else>
    <Item
      v-for="(post, index) in posts"
      :key="index"
      :title="post.name"
      :content="post.content"
      :image="undefined"
      :postId="post.postId"
      :isManage="true"
      @delete="fetchData"
    />
    <CPagin
      @pagechanged="pagechanged"
      :totalPages="totalPages"
      :total="total"
      :currentPage="currentPage"
    />
  </div>
</template>
