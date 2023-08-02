import { userWalletMapper } from '../user-wallet/normalizer';
import Vue from 'vue';
import { userMapper } from '../user/normalizer';

export const financeOperationsMapper = function(financeOperations) {
  let result = [];

  result = {
    ...result,
    ...financeOperations.reduce(
      (prev, financeOperation) => ({
        ...prev,
        [financeOperation.id]: financeOperationMapper(financeOperation)
      }),
      {}
    )
  };

  return result;
};

export const financeOperationMapper = financeOperation => ({
  id: financeOperation.id,
  money: financeOperation.money,
  type: presentTypes(financeOperation.type),
  status: presentStatus(financeOperation.status),
  user: userMapper(financeOperation.user),
  createdAt: financeOperation.createdAt,
  wallet: financeOperation.wallet
    ? userWalletMapper(financeOperation.wallet)
    : { info: 'Wallet removed' },
  canceledAt: financeOperation.canceledAt,
  canceledInfo: financeOperation.canceledInfo
});

function presentTypes(type) {
  switch (type) {
    case Vue.prototype.$getConst('FINANCE_OPERATION_TYPE').ENROLLMENT:
      return {
        value: Vue.prototype.$getConst('FINANCE_OPERATION_TYPE').ENROLLMENT,
        title: 'Deposit',
        isEnrollment: true
      };
    case Vue.prototype.$getConst('FINANCE_OPERATION_TYPE').WRITE_OFFS:
      return {
        value: Vue.prototype.$getConst('FINANCE_OPERATION_TYPE').WRITE_OFFS,
        title: 'Debit',
        isEnrollment: false
      };
    default:
      return null;
  }
}

function presentStatus(status) {
  switch (status) {
    case Vue.prototype.$getConst('FINANCE_OPERATION_STATUS').CREATED:
      return {
        title: 'Created',
        variant: 'warning',
        value: Vue.prototype.$getConst('FINANCE_OPERATION_STATUS').CREATED,
        isExecuted: false,
        isCanceled: false
      };
    case Vue.prototype.$getConst('FINANCE_OPERATION_STATUS').EXECUTED:
      return {
        title: 'Done',
        variant: '',
        value: Vue.prototype.$getConst('FINANCE_OPERATION_STATUS').EXECUTED,
        isExecuted: true,
        isCanceled: false
      };
    case Vue.prototype.$getConst('FINANCE_OPERATION_STATUS').PENDING:
      return {
        title: 'Waiting',
        variant: 'warning',
        value: Vue.prototype.$getConst('FINANCE_OPERATION_STATUS').PENDING,
        isExecuted: false,
        isCanceled: false
      };
    case Vue.prototype.$getConst('FINANCE_OPERATION_STATUS').CANCELED:
      return {
        title: 'Canceled',
        variant: '',
        value: Vue.prototype.$getConst('FINANCE_OPERATION_STATUS').EXECUTED,
        isExecuted: false,
        isCanceled: true
      };
    default:
      return null;
  }
}
