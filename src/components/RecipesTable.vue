<template>
  <el-table :data='items'>
    <el-table-column
      v-for="{ prop, label, sortable, index } in fields"
      :index="index"
      :key="prop"
      :prop="prop"
      :label="label"
      :sortable="sortable"
    />
  </el-table>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import recipes from '@/recipes.json'
export default defineComponent({
  setup () {
    const store = useStore()
    /* const inventory = computed(() => store.getters.inventory) */

    /* const items = ref(recipes) */
    const items = computed(() => store.getters.inventoryRecipes)
    const fields = [
      { prop: 'recipeId', label: 'Recipe #', sortable: true, index: true },
      { prop: 'recipe', label: 'Recipe', sortable: true },
      { prop: 'ingredient1', label: 'Ingredient 1', sortable: true },
      { prop: 'ingredient2', label: 'Ingredient 2', sortable: true },
      { prop: 'type', label: 'Type', sortable: true },
      { prop: 'size', label: 'Size', sortable: true }
    ]
    return {
      items,
      fields
    }
  }
})
</script>
