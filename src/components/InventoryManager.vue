<template>
  <el-row class="add-ingredients">
    <el-col :span="12">
      <div class="label">Ingredient</div>
      <el-autocomplete
        v-model="item"
        :fetch-suggestions="fetchSuggestions"
        class="inline-input"
        placeholder="Please Input"
      />
    </el-col>
    <el-col :span="6">
      <div class="label">Count</div>
      <el-input-number v-model="count" :min="1" />
    </el-col>
    <el-col :span="3">
      <el-button type="success" @click="handleClick">Add</el-button>
    </el-col>
  </el-row>
</template>
<script>
import { defineComponent, ref } from 'vue'
import ingredients from '@/ingredients.js'

export default defineComponent({
  setup (_, { emit }) {
    const item = ref('')
    const count = ref(0)

    const fetchSuggestions = (queryString, cb) => {
      const results = ingredients.filter(createFilter(queryString))
      console.log(results)
      cb(results)
    }

    const createFilter = (queryString) => {
      return (ingredient) => {
        return (
          ingredient.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    }
    return {
      item,
      count,
      ingredients,
      fetchSuggestions,
      handleClick: () => emit('submit', { item, count })
    }
  }
})
</script>
