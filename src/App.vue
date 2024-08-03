<!-- src/App.vue -->
<template>
  <div id="app" class="container">
    <h1>Магазин вкусностей</h1>
    <ProductList />
    <Cart />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';

export default {
  components: {
    ProductList,
    Cart,
  },
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}
</style>
