<template>
  <BNavbarNav class="ml-auto">
    <BNavItem to="/auth">{{ $t('mainLayoutBlocks.login') }}</BNavItem>
    <BNavItem to="/registration">{{ $t('mainLayoutBlocks.register') }}</BNavItem>
  </BNavbarNav>
</template>

<script>
export default {
  name: 'NotAuthorizedMenu'
};
</script>

<style scoped></style>
