import { createStore } from 'vuex'

export default createStore({
  state: {
    inventory: [
    ]
  },
  mutations: {
    INVENTORY_ADD_ITEM (state, item) {
      state.inventory.push(item)
    },
    INVENTORY_DEL_ITEM (state, index) {
      const inventory = [...state.inventory]
      inventory.splice(index, 1)
      state.inventory = [...inventory]
    }
  },
  actions: {
    inventoryAddItem ({ commit }, item) {
      commit('INVENTORY_ADD_ITEM', item)
    },
    inventoryDelItem ({ commit }, index) {
      commit('INVENTORY_DEL_ITEM', index)
    }
  }
})
