<template>
  <footer>
    <BContainer class="border-top pt-3">
      <BRow align-h="between">
        <BCol sm="6" xs="12">
          <div class="d-flex justify-content-start align-items-center">
            <div class="copyright">{{ $t('mainLayoutBlocks.copy') }}</div>
            <div class="footer-feedback ml-3">
              <RouterLink
                :to="{ name: 'SupportRequest' }"
                target="_blank"
                rel="nofollow"
                >{{ $t('mainLayoutBlocks.submitAnInquiry') }}</RouterLink
              >
            </div>
          </div>
        </BCol>
        <BCol sm="6" xs="12">
          <div class="d-flex justify-content-end align-items-center">
            <div class="ml-auto">
            </div>
            <div class="ml-3">{{ $t('mainLayoutBlocks.developed') }}</div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped></style>
