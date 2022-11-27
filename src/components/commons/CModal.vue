<script lang="ts">
export default {
  name: "CModal",
  props: {
    isModalVisible: Boolean,
    title: String,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <div
    class="modal fade"
    :id="isModalVisible ? 'modal' : 'none'"
    data-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
    data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body"><slot /></div>
        <div class="modal-footer">
          <slot name="footer" />
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-content {
  color: #212529;
}
</style>
