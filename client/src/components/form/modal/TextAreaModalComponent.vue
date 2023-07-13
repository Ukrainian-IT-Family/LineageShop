<template>
  <BFormGroup class="mb-3">
    <label class="fa-xs text-uppercase">{{ property.name }}</label>
    <BFormTextarea
      id="description-input"
      :placeholder="$t('form.needToEnterText')"
      rows="5"
      class="shadow-none"
    />
  </BFormGroup>
</template>

<script>
export default {
  name: 'TextAreaModalComponent',
  props: {
    property: Object
  }
};
</script>

<style scoped></style>
