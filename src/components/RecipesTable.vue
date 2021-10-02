<template>
  <el-table :data='items'>
    <el-table-column
      v-for="{ prop, label, sortable } in fields"
      :index="!!index"
      :key="prop"
      :prop="prop"
      :label="label"
      :sortable="sortable"
    />
  </el-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
import recipes from '@/recipes.json'
export default defineComponent({
  setup () {
    const items = ref(recipes)
    const fields = [
      { prop: 'recipeId', label: 'Recipe #', sortable: true, index: true },
      { prop: 'type', label: 'Type', sortable: true },
      { prop: 'size', label: 'Size', sortable: true },
      { prop: 'recipe', label: 'Recipe', sortable: true },
      { prop: 'ingredient1', label: 'Ingredient 1', sortable: true },
      { prop: 'ingredient2', label: 'Ingredient 2', sortable: true }
    ]
    return {
      items,
      fields
    }
  }
})
</script>
