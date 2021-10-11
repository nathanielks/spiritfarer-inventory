<template>
  <div class="home">
    <InventoryManager/>
    <recipes-table/>
  </div>
</template>

<script>
import InventoryManager from '@/components/InventoryManager.vue'
import RecipesTable from '@/components/RecipesTable.vue'

export default {
  name: 'Home',
  components: {
    InventoryManager,
    RecipesTable
  }
}
</script>
