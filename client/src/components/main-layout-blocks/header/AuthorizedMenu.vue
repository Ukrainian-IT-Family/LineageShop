<template>
  <BNavbarNav class="ml-auto authorized-menu">
    <BNavItem :to="{ name: 'MyPurchases' }">{{
      $t('mainLayoutBlocks.purchases')
    }}</BNavItem>
    <BNavItem :to="{ name: 'MySales' }">{{
      $t('mainLayoutBlocks.sales')
    }}</BNavItem>
    <BNavItem :to="{ name: 'Chat' }">{{
      $t('mainLayoutBlocks.messages')
    }}</BNavItem>
    <BNavItem :to="{ name: 'Finances' }">{{
      $t('mainLayoutBlocks.finance')
    }}</BNavItem>
    <BNavItemDropdown right>
      <template #button-content>
        <div class="user-link-photo">
          <img alt="" :src="authUser.userPhoto" />
        </div>
      </template>
      <BDropdownItem :to="{ name: 'UserSelfProfile' }">
        <span class="user-link-name">{{ this.user.login }}</span>
        <span class="user-link-desc">{{ $t('mainLayoutBlocks.profile') }}</span>
      </BDropdownItem>
      <BDropdownItem class="border-top" :to="{ name: 'UserSettings' }">
        {{ $t('mainLayoutBlocks.settings') }}
      </BDropdownItem>
      <BDropdownItem class="border-top" @click="exit()">
        {{ $t('mainLayoutBlocks.logOut') }}
      </BDropdownItem>
    </BNavItemDropdown>
  </BNavbarNav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import * as authActions from '@/store/modules/auth/types/actions';
import * as authGetters from '@/store/modules/auth/types/getters';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  name: 'AuthorizedMenu',
  props: {
    user: {
      login: String
    }
  },
  computed: {
    ...mapGetters('AuthService', {
      authUser: authGetters.GET_LOGGED_USER
    })
  },
  methods: {
    ...mapActions('AuthService', {
      signOut: authActions.SIGN_OUT
    }),

    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),

    async exit() {
      try {
        await this.signOut();
      } catch (error) {
        this.setErrorNotification(error);
      }
    }
  }
};
</script>

<style scoped></style>
