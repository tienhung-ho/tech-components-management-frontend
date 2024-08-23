<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <Product_card/>
  </div>
</template>

<script>
import { ref } from 'vue'
import Product_card from '@/commponents/product/product_card.components'

export default {
  name: 'Product',
  setup () {
    return {
      expanded: ref(false),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  components: {
    Product_card,
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
