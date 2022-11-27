import { getAllPosts, getPostById, deletePost } from "@/apis/post";
import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      isLoading: false,
    };
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async getAllPost(_, params) {
      this.commit("setLoading", true);
      const res = await getAllPosts(params);
      this.commit("setLoading", false);
      return res;
    },
    async getById(_, id: string) {
      this.commit("setLoading", true);
      const res = await getPostById(id);
      this.commit("setLoading", false);
      return res;
    },
    async deletePost(_, id: number) {
      const res = await deletePost(id);
      return res;
    },
  },
});
