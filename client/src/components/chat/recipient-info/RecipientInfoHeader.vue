<template>
  <div class="border-bottom">
    <BCol md="8" class="d-flex justify-content-start p-3">
      <BAvatar :src="recipientUser.userPhoto" class="mr-3"></BAvatar>
      <div>
        <strong>{{ recipientUser.login }}</strong>
        <div class="text-secondary">{{ statusOnline }}</div>
      </div>
    </BCol>
  </div>
</template>

<script>
export default {
  name: 'RecipientInfoHeader',
  props: {
    recipientUser: {
      id: Number,
      login: String,
      online: Boolean,
      userPhoto: String
    }
  },
  computed: {
    statusOnline() {
      if (this.recipientUser.online) {
        return 'Online';
      }

      return 'Offline';
    }
  }
};
</script>

<style scoped></style>
