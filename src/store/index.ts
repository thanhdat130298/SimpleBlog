import { getAllPosts, getPostById } from "@/apis/post";
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
      console.log(payload);
      state.isLoading = payload;
    },
  },
  actions: {
    async getAllPost() {
      this.commit("setLoading", true);
      const res = await getAllPosts();
      this.commit("setLoading", false);
      return res;
    },
    async getById(state, id: string) {
      this.commit("setLoading", true);
      const res = await getPostById(id);
      this.commit("setLoading", false);
      return res;
    },
  },
});
