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
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const items = computed(() => store.getters.inventoryRecipes)
    const fields = [
      { prop: 'recipeId', label: 'Recipe #', sortable: true, index: true },
      { prop: 'recipe', label: 'Recipe', sortable: true },
      { prop: 'ingredient1', label: 'Ingredient 1', sortable: true },
      { prop: 'ingredient2', label: 'Ingredient 2', sortable: true },
      { prop: 'type', label: 'Type', sortable: true },
      { prop: 'size', label: 'Size', sortable: true },
      { prop: 'spiritFavorite', label: 'Spirit Favorite', sortable: true }
    ]
    return {
      items,
      fields
    }
  }
})
</script>
