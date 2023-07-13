<template>
  <BRow>
    <BCol cols="12" class="pt-3">
      <BTableSimple hover>
        <BThead class="border-bottom pb-3">
          <BTr>
            <BTh>{{ $t('finances.date') }}</BTh>
            <BTh>{{ $t('finances.description') }} </BTh>
            <BTh>{{ $t('finances.status') }} </BTh>
            <BTh class="text-md-right">{{ $t('finances.sum') }}</BTh>
          </BTr>
        </BThead>
        <BTbody>
          <template v-for="financeOperation in financeOperations">
            <FinanceListRowComponent
              :key="financeOperation.id"
              :financeOperation="financeOperation"
            />
          </template>
        </BTbody>
      </BTableSimple>
    </BCol>
  </BRow>
</template>

<script>
import FinanceListRowComponent from '@/components/finances/FinanceListRowComponent';

export default {
  name: 'FinanceListComponent',
  components: {
    FinanceListRowComponent
  },
  props: {
    financeOperations: Array
  }
};
</script>

<style scoped></style>
