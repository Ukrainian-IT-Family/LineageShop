<template>
  <div class="collapsible-sidebar-body">
    <dl class="request-details">
      <dt>{{ $t('supportChat.initiator') }}</dt>
      <RouterLink
        :to="{ name: 'UserProfile', params: { id: support.authorId } }"
      >
        <dd>{{ support.login }}</dd>
      </RouterLink>
      <dt>{{ $t('supportChat.email') }}</dt>
      <dd>{{ support.email }}</dd>
      <dt>{{ $t('supportChat.created') }}</dt>
      <dd>
        <time datetime="2021-07-12T07:09:21+00:00" data-datetime="date">
          {{ support.createdAt }}
        </time>
      </dd>
      <dt>{{ $t('supportChat.lastUpdate') }}</dt>
      <dd>
        <time datetime="2021-07-12T07:09:21+00:00" data-datetime="date">
          {{ support.updatedAt }}
        </time>
      </dd>
    </dl>

    <dl class="request-details">
      <dt>ID</dt>
      <dd>#{{ support.id }}</dd>

      <dt>{{ $t('supportChat.status') }}</dt>
      <dd>
        <span
          class="status-label status-label-answered"
          :title="$t('supportChat.answer')"
        >
          {{ support.status.label }}
        </span>
      </dd>

      <dt>{{ $t('supportChat.theme') }}</dt>
      <dd>
        {{ support.subject.label }}
      </dd>

      <dt>{{ $t('supportChat.login') }}</dt>
      <dd>
        {{ support.login }}
      </dd>

      <dt>{{ $t('supportChat.orderNumber') }}</dt>
      <dd>
        {{ support.order_id ? support.order_id : '-' }}
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'SupportRequestDetail',
  props: {
    support: {
      id: Number,
      subject: {
        id: Number,
        label: String
      },
      authorId: Number,
      login: Object,
      status: {
        id: Number,
        label: String
      },
      createdAt: String,
      order_id: Number,
      updatedAt: String
    }
  }
};
</script>
