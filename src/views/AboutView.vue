<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-if="error">{{ error }}</p>
    <div v-else v-for="product in products" :key="product">
      (( <span>{{ product.name }}</span> -
      <span>{{ product.slaePrestange }}</span> ))
    </div>
  </div>
</template>
<script>
import getProducts from "@/composable/getProducts.js";

export default {
  setup() {
    const { products, error, laodData } = getProducts();

    
    laodData()

    return { products, error };
  },
};
</script>
<style>
.about {
  text-align: center;
  margin: 20px auto;
  width: 70%;
}
</style>
