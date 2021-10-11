<template>
  <el-table :data="items">
    <el-table-column
      v-for="{ prop, label, sortable, index } in fields"
      :index="index"
      :key="prop"
      :prop="prop"
      :label="label"
      :sortable="sortable"
    />
    <el-table-column label="Actions">
      <template #default="scope">
        <el-button type="text" size="small" @click.prevent="$emit('remove', scope.$index)"
          >Remove</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { defineComponent, computed } from 'vue'
import ingredientsDB from '@/ingredients.js'

export default defineComponent({
  props: {
    items: Array
  },
  setup (props) {
    const fields = [
      { prop: 'item', label: 'Name', sortable: true, index: true },
      { prop: 'categories', label: 'Categories', sortable: true, index: true },
      { prop: 'count', label: 'Count', sortable: true }
    ]
    return {
      fields
    }
  }
})
</script>
