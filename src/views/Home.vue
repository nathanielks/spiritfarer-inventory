<template>
  <div class="home">
    <recipes-table/>
  </div>
</template>

<script>
import RecipesTable from '@/components/RecipesTable.vue'

export default {
  name: 'Home',
  components: {
    RecipesTable
  }
}
</script>
