<template>
  <div>
    <BListGroup class="mb-3">
      <BListGroupItem>
        <RouterLink :to="{ name: 'UserAdminPanel' }">{{ $t('adminPanel.users') }}</RouterLink>
      </BListGroupItem>
      <BListGroupItem>
        <RouterLink :to="{ name: 'OrderAdminPanel' }">{{ $t('adminPanel.order') }}</RouterLink>
      </BListGroupItem>
      <BListGroupItem>
        <RouterLink :to="{ name: 'SupportAdminPanel' }">
          {{ $t('adminPanel.supportRequests') }}
        </RouterLink>
      </BListGroupItem>
      <BListGroupItem>
        <RouterLink :to="{ name: 'FinanceOperationAdminPanel' }">
          {{ $t('adminPanel.finHistory') }}
        </RouterLink>
      </BListGroupItem>
    </BListGroup>
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: 'AdminPanelComponent'
};
</script>

<style scoped></style>
