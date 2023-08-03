<template>
  <BRow>
    <BCol cols="12">
      <BTableSimple borderless hover>
        <BThead class="border-bottom pb-3">
          <BTr>
            <BTh>{{ $t('adminPanel.onlineStatus') }}</BTh>
            <BTh>{{ $t('adminPanel.login') }}</BTh>
            <BTh>{{ $t('adminPanel.email') }}</BTh>
            <BTh> </BTh>
            <BTh>{{ $t('adminPanel.resetPassword') }}</BTh>
          </BTr>
        </BThead>
        <BTbody>
          <UserAdminPanelRow
            v-for="user in users"
            :key="user.id"
            :user="user"
          ></UserAdminPanelRow>
        </BTbody>
      </BTableSimple>
    </BCol>
  </BRow>
</template>

<script>
import UserAdminPanelRow from './UserAdminPanelRow';

export default {
  name: 'UserAdminPanelTable',
  components: {
    UserAdminPanelRow
  },
  props: {
    users: Object
  }
};
</script>

<style scoped></style>
