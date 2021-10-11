<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
  >
  <el-row class="add-ingredients">
    <el-col :span="12">
      <div class="label">Ingredient</div>
      <el-select prop="ingredient" v-model="item" filterable placeholder="Select Ingredient">
        <el-option
          v-for="item in ingredients"
          :key="item.value"
          :label="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="6">
      <div class="label">Count</div>
      <el-input-number prop="count" v-model="count" :min="1" />
    </el-col>
    <el-col :span="3">
      <el-button type="success" :disabled="disabled" @click="submitForm">Add</el-button>
    </el-col>
  </el-row>
  </el-form>
</template>
<script>
import { defineComponent, ref, unref, computed } from 'vue'
import ingredients from '@/ingredients.js'

const ingredientNames = ingredients.map(ing => ing.value)

export default defineComponent({
  setup (_, { emit }) {
    const item = ref('')
    const count = ref(0)

    const form = ref({
      ingredient: '',
      count: 0
    })
    const rules = ref({
      ingredient: [
        {
          required: true,
          enum: ingredientNames,
          trigger: 'change'
        }
      ],
      count: [
        {
          required: true,
          min: 1,
          trigger: 'change'
        }
      ]
    })

    const submitForm = () => {
      unref(form).validate((valid) => {
        if (valid) {
          emit('submit', { item: item.value, count: count.value })
          count.value = 1
          item.value = ''
        } else {
          console.error('AddToInventory form invalid')
          return false
        }
      })
    }

    const disabled = computed(() => !unref(item))

    return {
      form,
      rules,
      item,
      count,
      ingredients,
      submitForm,
      disabled
    }
  }
})
</script>
