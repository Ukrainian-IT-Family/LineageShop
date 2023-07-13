<template>
  <div class="mt-3">
    <h4>{{ $t('adminPanel.atYourRequest') }} <slot></slot> {{ $t('adminPanel.notFound') }}</h4>
  </div>
</template>

<script>
export default {
  name: 'EmptyAdminPanelComponent'
};
</script>

<style scoped></style>
