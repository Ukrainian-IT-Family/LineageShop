<template>
  <div class="mt-3">
    <h4>{{ $t('supportTable.yourSearch') }} <slot /> {{ $t('supportTable.didNotMatch') }}</h4>
  </div>
</template>

<script>
export default {
  name: 'EmptyTableComponent'
};
</script>

<style scoped></style>
