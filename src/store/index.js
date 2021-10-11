import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import recipesDB from '@/recipes.json'
import ingredientsDB from '@/ingredients.js'
import fastCartesian from 'fast-cartesian'
import ingredients from '@/ingredients.js'

// Actualy, it'll be  list of what the finite combinations (iterate over recipes and build the finite list of combinations)
// TODO phase one will just be based on ingredient categories, phase 2 will include recipes for specific ingredients

const ingredientFromPayload = (item) => {
  const ingredient = ingredientsDB.find(ing => (ing.value === item.item))
  return {
    ...ingredient,
    ...item
  }
}

const recipesByIngredient = (recipes, prop) => {
  return recipes.reduce((acc, recipe) => {
    const ingredients = recipe[prop].split('/')
    ingredients.forEach(ingredient => {
      if (!ingredient) return acc
      if (!acc[ingredient]) acc[ingredient] = []
      acc[ingredient].push(recipe)
    })
    return acc
  }, {})
}

const cleanParts = string => string.split('/')

// build list of all possible recipe ingredient combinations
// TODO why is this only producing arrays of 1 item?
const recipeCombinations = (recipes) => {
  return recipes.reduce((acc, recipe) => {
    const ingredients1 = cleanParts(recipe.ingredient1)
    const ingredients2 = cleanParts(recipe.ingredient2)
    const cartesian = fastCartesian([ingredients1, ingredients2])
    cartesian.map(combo => {
      const key = JSON.stringify(combo)
      if (acc.has(key)) {
        return acc.set(key, [...acc.get(key), recipe])
      }
      return acc.set(key, [recipe])
    })
    return acc
  }, new Map())
}

// build a cartesian product of all the possible options based on our inventory
const inventoryCombinations = (inventory) => {
  const combos = Array.from(inventory.reduce((acc, ingredient) => {
    console.log(ingredient)
    const name = ingredient.value
    const type = ingredient.categories.find(cat => cat.split(':')[0] === 'Type').split(':')[1]
    acc.add(name)
    acc.add(type)
    acc.add('')
    return acc
  }, new Set()))
  return fastCartesian([combos, combos])
}

export default createStore({
  // plugins: [createPersistedState()],
  state: {
    inventory: [
    ],
    recipes: recipesDB
  },
  actions: {
    inventoryAddItem ({ commit }, payload) {
      commit('INVENTORY_ADD_ITEM', payload)
    },
    inventoryRmItem ({ commit }, payload) {
      commit('INVENTORY_RM_ITEM', payload)
    }
  },
  mutations: {
    INVENTORY_ADD_ITEM (state, payload) {
      const index = state.inventory.findIndex(item => {
        return (item.item === payload.item)
      })

      if (index < 0) {
        const ingredient = ingredientFromPayload(payload)
        return state.inventory.push(ingredient)
      }

      const ingredient = state.inventory[index]
      ingredient.count += payload.count
      state.inventory[index] = ingredient
    },
    INVENTORY_RM_ITEM (state, index) {
      const inventory = [...state.inventory]
      inventory.splice(index, 1)
      state.inventory = [...inventory]
    }
  },
  getters: {
    inventoryCombinations: state => inventoryCombinations(state.inventory),
    recipeCombinations: state => recipeCombinations(state.recipes),
    // recipesByIngredient1: state => recipesByIngredient(state.recipes, 'ingredient1'),
    // recipesByIngredient2: state => recipesByIngredient(state.recipes, 'ingredient2'),
    inventoryRecipes: (state, getters) => {
      return getters.inventoryCombinations.reduce((acc, combo) => {
        const recipes = getters.recipeCombinations.get(JSON.stringify(combo)) || []
        return [...acc, ...recipes]
      }, [])
    }
  }
})
