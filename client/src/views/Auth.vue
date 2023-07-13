<template>
  <div>
    <TitleComponent>{{ $t('views.auth') }}</TitleComponent>
    <AuthComponent></AuthComponent>
  </div>
</template>

<script>
import TitleComponent from '@/components/main-layout-blocks/title/TitleComponent';
import AuthComponent from '@/components/auth/AuthComponent';

export default {
  name: 'Auth',
  components: { AuthComponent, TitleComponent }
};
</script>

<style scoped></style>
