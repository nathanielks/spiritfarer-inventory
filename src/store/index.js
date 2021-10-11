import { createStore } from 'vuex'

export default createStore({
  state: {
    inventory: [
    ]
  },
  mutations: {
    INVENTORY_ADD_ITEM (state, payload) {
      const index = state.inventory.findIndex(item => (item.value = payload.item))
      if (index < 0) {
        return state.inventory.push(payload)
      }
      const ingredient = state.inventory[index]
      ingredient.count += payload.count
      state.inventory[index] = ingredient
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
