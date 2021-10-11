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
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    items: Array
  },
  setup () {
    const fields = [
      { prop: 'item', label: 'Name', sortable: true, index: true },
      { prop: 'count', label: 'Count', sortable: true, index: true },
      { prop: 'actions', label: 'actions', sortable: false }
    ]
    return {
      fields
    }
  }
})
</script>
