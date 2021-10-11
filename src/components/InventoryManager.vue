<template>
  <div>
    <AddToInventory @submit="addItem"/>
    <InventoryTable :items="inventory" @remove="rmItem" />
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import AddToInventory from '@/components/AddToInventory.vue'
import InventoryTable from '@/components/InventoryTable.vue'

export default defineComponent({
  components: {
    AddToInventory,
    InventoryTable
  },
  setup () {
    const store = useStore()
    const inventory = computed(() => store.state.inventory)
    const addItem = payload => store.dispatch('inventoryAddItem', payload)
    const rmItem = payload => store.dispatch('inventoryRmItem', payload)

    return {
      inventory,
      addItem,
      rmItem
    }
  }
})
</script>
