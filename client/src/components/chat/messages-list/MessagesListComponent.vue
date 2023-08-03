<template>
  <div class="p-3 chat-area">
    <BRow class="d-flex justify-content-between mb-3">
      <BCol md="6">
        <RouterLink to="#" class="font-weight-bold text-dark">
          {{ $t('chat.title') }}
        </RouterLink>
        <span
          class="pr-1 pl-1 bg-primary text-white rounded-lg font-weight-bold fa-xs"
          >{{ $t('chat.alerts') }}</span
        >
      </BCol>
      <!--      <BCol md="6">-->
      <!--        <div class="text-secondary text-right">24.01.2021</div>-->
      <!--      </BCol>-->
      <BRow>
        <BCol md="12">
          <BAlert show variant="secondary" class="mr-3 ml-3 p-3 d-flex">
            <FontAwesomeIcon
              class="text-primary mr-3"
              :icon="['fa', 'info-circle']"
              size="lg"
            />
            <div>
              <span v-html="$t('chat.text')"></span> "<RouterLink
                to="/orders/sales"
                >{{ $t('chat.mySales') }}</RouterLink
              >".
            </div>
          </BAlert>
        </BCol>
      </BRow>
    </BRow>
    <BRow
      class="d-flex justify-content-between mb-3"
      v-for="message in messages"
      :key="message.id"
    >
      <BCol md="6">
        <RouterLink to="#" class="font-weight-bold text-dark">
          {{ message.authorUser.login }}
        </RouterLink>
      </BCol>
      <BCol md="6">
        <div class="text-secondary text-right">
          {{ message.createdAt | moment('DD.MM.YYYY') }}
        </div>
      </BCol>
      <BRow>
        <BCol md="12">
          <div v-if="message.hiddenStatus" class="text-secondary pl-3 pr-3">
            {{ $t('chat.messageHidden') }}
          </div>
          <div v-else class="pl-3 pr-3 message">{{ message.message }}</div>
        </BCol>
      </BRow>
    </BRow>
  </div>
</template>

<script>
export default {
  name: 'MessagesListComponent',
  props: {
    messages: Object
  }
};
</script>

<style scoped>
.chat-area {
  overflow-x: hidden;
  overflow-y: auto;
}

.message {
  white-space: pre-wrap;
}
</style>
