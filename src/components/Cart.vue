<template>
    <div class="cart">
      <h2>Корзина</h2>
      <ul>
        <li v-for="product in cart" :key="product.cartId">
          {{ product.name }} - {{ product.price }}₽
          <button @click="removeFromCart(product.cartId)" class="remove-btn">Удалить</button>
        </li>
      </ul>
      <div class="cart-summary">
        <p>Общая сумма: {{ cartTotal }}₽</p>
        <p>Бюджет: {{ budget }}₽</p>
        <button @click="purchase" :disabled="!canPurchase">Купить</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['cart', 'budget']),
      ...mapGetters(['cartTotal', 'canPurchase']),
    },
    methods: {
      ...mapActions(['purchase', 'removeFromCart']),
    },
  };
  </script>
  
  <style scoped>
  .cart {
    max-width: 600px;
    margin: 20px auto;
    text-align: left;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background: #f9f9f9;
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .cart-summary {
    margin-top: 10px;
  }
  
  button {
    padding: 5px 10px;
    background-color: purple;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  button[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .remove-btn {
    background-color: #f44336;
  }
  
  .remove-btn:hover {
    background-color: #e53935;
  }
  </style>
  