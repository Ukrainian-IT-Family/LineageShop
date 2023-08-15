<template>
  <div class="d-flex justify-content-center">
    <div
        class="modal d-block bg-white-transparent"
        tabindex="-1"
        role="dialog"
    >
      <div class="mx-auto-center" role="document">
        <div class="spinner-border" style="width: 8rem; height: 8rem;" role="status">
          <span class="sr-only">Loading</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style scoped>
.d-block {
  display: block;
}
.mx-auto-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.bg-white-transparent {
  background-color: rgba(255, 255, 255, 1);
}
</style>