<template>
  <div>
    <TitleComponent>{{ $t('views.notFound') }}</TitleComponent>
    <div>
      {{ $t('views.pageNotFound') }}
      <RouterLink :to="{ name: 'Index' }">{{ $t('views.mainPage') }}</RouterLink>.
    </div>
  </div>
</template>

<script>
import TitleComponent from '@/components/main-layout-blocks/title/TitleComponent';

export default {
  name: 'Error404',
  components: {
    TitleComponent
  }
};
</script>

<style scoped></style>
