<template>
  <header class=" bg-white">
    <BContainer class="header-container">
      <BNavbar toggleable="lg">
        <BNavbarBrand to="/" class="logo p-0">
          <span class="logo">L-Shop</span>
        </BNavbarBrand>

        <BNavbarToggle target="nav-collapse"></BNavbarToggle>

        <BCollapse id="nav-collapse" is-nav>
          <BNavbarNav>
            <BNavItemDropdown :text="$t('mainLayoutBlocks.help')" right>
              <BDropdownItem href="#">
                <RouterLink :to="{ name: 'FAQ' }" class="text-decoration-none">
                  {{ $t('mainLayoutBlocks.helpCenter') }}
                </RouterLink>
              </BDropdownItem>
              <BDropdownItem>
                <RouterLink
                  :to="{ name: 'SupportRequest' }"
                  class="text-decoration-none"
                >
                  {{ $t('mainLayoutBlocks.sendRequest') }}
                </RouterLink>
              </BDropdownItem>
              <BDropdownItem v-if="this.getLoggedUser">
                <RouterLink
                  :to="{ name: 'SupportRequestsTable' }"
                  class="text-decoration-none"
                >
                  {{ $t('mainLayoutBlocks.myRequests') }}
                </RouterLink>
              </BDropdownItem>
            </BNavItemDropdown>
          </BNavbarNav>
          <AuthorizedMenu
            v-if="this.getLoggedUser"
            :user="this.getLoggedUser"
          ></AuthorizedMenu>
          <NotAuthorizedMenu v-else></NotAuthorizedMenu>
        </BCollapse>
      </BNavbar>
    </BContainer>
  </header>
</template>

<script>
import NotAuthorizedMenu from '@/components/main-layout-blocks/header/NotAuthorizedMenu';
import AuthorizedMenu from '@/components/main-layout-blocks/header/AuthorizedMenu';
import { mapGetters } from 'vuex';
import * as authGetters from '@/store/modules/auth/types/getters';

export default {
  name: 'HeaderComponent',
  components: { AuthorizedMenu, NotAuthorizedMenu },
  computed: {
    ...mapGetters('AuthService', {
      getLoggedUser: authGetters.GET_LOGGED_USER
    })
  }
};
</script>

<style scoped></style>
