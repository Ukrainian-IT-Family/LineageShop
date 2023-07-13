<template>
  <BCol class="pt-3 pr-5 pb-3">
    <div class="text-secondary">{{ $t('chat.dateOfRegistration') }}</div>
    <div>
      {{ formatUserCreatedAt(userCreatedAt) }},
      {{ formatRelativeTime(userCreatedAt) }}
    </div>
  </BCol>
</template>

<script>
import moment from 'moment';
export default {
  name: 'RecipientInfoRightCol',
  props: {
    userCreatedAt: String
  },
  methods: {
    formatUserCreatedAt(date) {
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      });
      return formattedDate;
    },
    formatRelativeTime(date) {
      const currentDate = new Date();
      const timeDifference = currentDate - new Date(date);

      const minutes = Math.floor(timeDifference / 60000);
      if (minutes < 1) {
        return 'Just now';
      } else if (minutes < 60) {
        return `${minutes} minutes ago`;
      } else {
        const hours = Math.floor(minutes / 60);
        if (hours < 24) {
          return `${hours} hours ago`;
        } else {
          const days = Math.floor(hours / 24);
          return `${days} days ago`;
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
