import { createStore } from 'vuex';

export default createStore({
  state: {
    budget: 1000,
    cart: [],
    products: [
      { id: 1, name: 'Чипсы с крабом Lays', price: 150 },
      { id: 2, name: 'Добрый кола большой', price: 200 },
      { id: 3, name: 'Сладкая Вода лайм', price: 70 },
      { id: 4, name: 'Сыр Пармезан', price: 400 },
    ],
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, product) => total + product.price, 0);
    },
    canPurchase(state, getters) {
      return state.budget >= getters.cartTotal;
    },
  },
  mutations: {
    addToCart(state, product) {
      // Добавляем товар в начало списка с уникальным идентификатором
      const cartProduct = { ...product, cartId: Date.now() };
      state.cart.unshift(cartProduct);
    },
    removeFromCart(state, cartId) {
      // Удаляем товар из корзины по уникальному cartId
      state.cart = state.cart.filter(product => product.cartId !== cartId);
    },
    completePurchase(state) {
      // Обновляем бюджет и очищаем корзину после покупки
      state.budget -= state.cart.reduce((total, product) => total + product.price, 0);
      state.cart = [];
    },
  },
  actions: {
    addToCart({ commit, getters }, product) {
      // Проверяем, не превышает ли общая сумма бюджет, перед добавлением
      if (getters.canPurchase) {
        commit('addToCart', product);
      } else {
        alert('Бюджет превышен!');
      }
    },
    removeFromCart({ commit }, cartId) {
      // Удаление товара из корзины
      commit('removeFromCart', cartId);
    },
    purchase({ commit, getters }) {
      // Проверяем, можем ли мы совершить покупку
      if (getters.canPurchase) {
        commit('completePurchase');
        alert('Покупка совершена успешно!');
      } else {
        alert('Недостаточно средств для покупки!');
      }
    },
  },
});
