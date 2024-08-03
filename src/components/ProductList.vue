<!-- src/components/ProductList.vue -->
<template>
    <div class="product-list">
      <h2>Список товаров</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }}₽
          <button @click="addToCart(product)">Добавить в корзину</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['products']),
    },
    methods: {
      ...mapActions(['addToCart']),
    },
  };
  </script>
  
  <style scoped>
  .product-list {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background: #f9f9f9;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  button {
    padding: 5px 10px;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: orangered;
  }
  </style>
  