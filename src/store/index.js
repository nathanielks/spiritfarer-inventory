import { createStore } from 'vuex'

export default createStore({
  state: {
    inventory: [
    ]
  },
  mutations: {
    INVENTORY_ADD_ITEM (state, payload) {
      state.inventory.push(payload)
    },
    INVENTORY_RM_ITEM (state, index) {
      const inventory = [...state.inventory]
      inventory.splice(index, 1)
      state.inventory = [...inventory]
    }
  },
  actions: {
    inventoryAddItem ({ commit }, payload) {
      commit('INVENTORY_ADD_ITEM', payload)
    },
    inventoryRmItem ({ commit }, payload) {
      commit('INVENTORY_RM_ITEM', payload)
    }
  }
})
