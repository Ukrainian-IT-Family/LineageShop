<template>
  <BRow>
    <template v-if="product.name">
      <BCol cols="6">
        <ProductPropertiesItemComponent
          :name="$t('productDetails.name')"
          :property="product.name"
        />
      </BCol>
    </template>
    <BCol cols="6">
      <ProductPropertiesItemComponent :name="$t('productDetails.price')" :property="product.price" />
    </BCol>
    <template v-if="product.rank">
      <BCol cols="6" v-if="product.rank.value">
        <ProductPropertiesItemComponent
          :name="$t('productDetails.rank')"
          :property="product.rank.value"
        />
      </BCol>
    </template>
    <template v-if="product.subProperty">
      <BCol cols="6" v-if="product.subProperty.value">
        <ProductPropertiesItemComponent
          :name="$t('productDetails.type')"
          :property="product.subProperty.value"
        />
      </BCol>
    </template>
    <BCol cols="6" v-if="product.availability">
      <ProductPropertiesItemComponent
        :name="$t('productDetails.availableQuantity')"
        :property="product.availability"
      />
    </BCol>
    <template v-if="product.equipment">
      <BCol cols="6" v-if="product.equipment.value">
        <ProductPropertiesItemComponent
          :name="$t('productDetails.equipment')"
          :property="product.equipment.value"
        />
      </BCol>
    </template>
    <BCol cols="6" v-if="product.profession">
      <ProductPropertiesItemComponent
        :name="$t('productDetails.profession')"
        :property="product.profession"
      />
    </BCol>
    <BCol cols="6" v-if="product.level">
      <ProductPropertiesItemComponent
        :name="$t('productDetails.level')"
        :property="product.level"
      />
    </BCol>
    <template v-if="product.type">
      <BCol cols="6" v-if="product.type.value">
        <ProductPropertiesItemComponent
          :name="$t('productDetails.type')"
          :property="product.type.value"
        />
      </BCol>
    </template>
  </BRow>
</template>

<script>
import _ from 'lodash';
import ProductPropertiesItemComponent from './ProductPropertiesItemComponent';

export default {
  name: 'ProductPropertiesListComponent',
  components: {
    ProductPropertiesItemComponent
  },
  props: {
    propertiesValues: Object,
    product: Object
  },
  computed: {
    getArraysProperties() {
      return _.chunk(_.values(this.propertiesValues), 2);
    }
  }
};
</script>

<style scoped></style>
