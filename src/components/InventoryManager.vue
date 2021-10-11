<template>
  <div>
    <AddToInventory />
    <InventoryTable :items="inventory" />
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

    return {
      inventory
    }
  }
})
</script>
