<template>
  <BContainer>
    <BackgroundImageComponent></BackgroundImageComponent>
    <BRow align-h="between">
      <BCol md="2" sm="3">
        <div class="back-link">
          <RouterLink
            to="#"
            class="d-flex align-items-center position-relative text-white pl-3"
          >
            <FontAwesomeIcon
              :icon="['fas', 'chevron-left']"
              size="x"
              class="back-link-icon"
            />
            <span class="back-link-inside font-weight-bold">
              {{ $t('tradeAdena.list') }}</span
            >
          </RouterLink>
        </div>
      </BCol>
      <BCol md="10" sm="9">
        <BRow>
          <h1 class="page-header page-header-no-hr ">
            {{ $t('tradeAdena.adena') }}
          </h1>
        </BRow>
        <BRow>
          <BCol md="8" sm="7">
            <div class="page-content">
              <BRow>
                <BTableSimple borderless>
                  <BThead class="border-bottom pb-3">
                    <BTr>
                      <BTh> </BTh>
                      <BTh>{{ $t('tradeAdena.server') }}</BTh>
                      <BTh class="font-weight-normal">{{ $t('tradeAdena.availability') }}</BTh>
                      <BTh class="font-weight-normal">{{ $t('tradeAdena.price') }}</BTh>
                      <BTh class="font-weight-normal">{{ $t('tradeAdena.catalogPrice') }}</BTh>
                    </BTr>
                  </BThead>
                  <BTbody>
                    <BTr class="mt-3">
                      <BTd>
                        <BFormCheckbox
                          class="m-auto"
                          name="check-button"
                          switch
                        ></BFormCheckbox>
                      </BTd>
                      <BTd><strong>Airin + Blackbird</strong></BTd>
                      <BTd class="position-relative">
                        <div
                          class="d-flex justify-content-end align-items-center"
                        >
                          <BFormInput></BFormInput
                          ><span class="font-weight-bold position-absolute pr-3"
                            >KK</span
                          >
                        </div></BTd
                      >
                      <BTd class="position-relative">
                        <div
                          class="d-flex justify-content-end align-items-center"
                        >
                          <BFormInput></BFormInput
                          ><span class="font-weight-bold position-absolute pr-3"
                            >$</span
                          >
                        </div>
                      </BTd>
                      <BTd>
                        <div>
                          <span>151.87 $</span>
                          <RouterLink to="#" class="ml-1">
                            <FontAwesomeIcon
                              :icon="['fas', 'question-circle']"
                            ></FontAwesomeIcon>
                          </RouterLink>
                          <div
                            class="popover-content bg-light rounded-lg p-3 text-center"
                          >
                            <span>{{ $t('tradeAdena.buyerPrice') }}</span>
                            <BTableSimple class="mt-3">
                              <BTbody>
                                <BTr>
                                  <BTd class="w-50">{{ $t('tradeAdena.card') }}</BTd>
                                  <BTd class="w-50">153.12 $</BTd> </BTr
                                ><BTr>
                                  <BTd class="w-50">{{ $t('tradeAdena.card') }}</BTd>
                                  <BTd class="w-50">153.12 $</BTd> </BTr
                                ><BTr>
                                  <BTd class="w-50">{{ $t('tradeAdena.card') }}</BTd>
                                  <BTd class="w-50">153.12 $</BTd> </BTr
                                ><BTr>
                                  <BTd class="w-50">{{ $t('tradeAdena.card') }}</BTd>
                                  <BTd class="w-50">153.12 $</BTd>
                                </BTr>
                              </BTbody>
                            </BTableSimple>
                          </div>
                        </div>
                      </BTd>
                    </BTr>
                  </BTbody>
                </BTableSimple>
              </BRow>
            </div>
          </BCol>
          <BCol md="4" sm="5" class="pt-5">
            <div>
              <label for="min-sum" class="unique-font"
                >{{ $t('tradeAdena.minSum') }}</label
              >
              <div class="d-flex justify-content-end align-items-center">
                <BFormInput
                  class="position-relative"
                  type="text"
                  id="min-sum"
                  aria-describedby="min-sum-help-block"
                >
                </BFormInput>
                <span class="position-absolute font-weight-bold pr-3">$</span>
              </div>
              <BFormText id="min-sum-help-block">
                {{ $t('tradeAdena.less') }}
              </BFormText>
              <BButton
                tupe="submit"
                variant="primary"
                class="btn-block js-lot-offer-edit mt-3"
                >{{ $t('tradeAdena.save') }}</BButton
              >
            </div>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script>
import BackgroundImageComponent from '@/components/main-layout-blocks/header/BackgroundImageComponent';
export default {
  name: 'TradeAdena',
  components: {
    BackgroundImageComponent
  }
};
</script>

<style scoped>
.page-header {
  font-size: 30px;
  line-height: 1;
  font-weight: 1000;
}
.popover-content {
  display: inline-block;
  margin-top: 5px;
  line-height: 10px;
  font-size: 12px;
  position: relative;
}
.popover-content::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  top: -5px;
  left: 30px;
  background-color: #f8f9fa;
  transform: rotate(45deg);
}
</style>
